import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB, { getDatabaseStatus } from './database.js';
import { sendBookingNotifications } from './notifications.js';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.js';
import reviewRoutes from './routes/reviews.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const requireDatabase = (featureName) => (req, res) => {
  const dbStatus = getDatabaseStatus();
  res.status(503).json({
    error: `${featureName} is temporarily unavailable`,
    details: dbStatus.reason || 'Database connection is unavailable on this server.'
  });
};

app.get('/api/health', (req, res) => {
  const dbStatus = getDatabaseStatus();
  res.json({
    success: true,
    server: 'ok',
    database: dbStatus.connected ? 'connected' : 'disconnected',
    details: dbStatus.connected
      ? `MongoDB connected: ${dbStatus.host}`
      : dbStatus.reason
  });
});

app.use('/api/auth', (req, res, next) => {
  if (!getDatabaseStatus().connected) {
    return requireDatabase('Authentication')(req, res);
  }
  next();
}, authRoutes);

app.use('/api/chat', (req, res, next) => {
  if (!getDatabaseStatus().connected) {
    return requireDatabase('Chat')(req, res);
  }
  next();
}, chatRoutes);

app.use('/api/reviews', (req, res, next) => {
  if (!getDatabaseStatus().connected) {
    return requireDatabase('Reviews')(req, res);
  }
  next();
}, reviewRoutes);

app.post('/api/book-consultation', async (req, res) => {
  const { name, email, phone, service, message, preferredDate, preferredTime } = req.body;

  if (!name || !email || !phone || !service) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  const bookingData = {
    name,
    email,
    phone,
    service,
    message,
    preferredDate,
    preferredTime,
    submittedAt: new Date().toISOString()
  };

  try {
    console.log('New consultation booked:', bookingData);

    const notificationResults = await sendBookingNotifications(bookingData);
    const emailSent = notificationResults.email.success;
    const whatsappSent = notificationResults.whatsapp.success;

    if (emailSent || whatsappSent) {
      return res.json({
        success: true,
        message: 'Consultation booked successfully! We will contact you within 24 hours.',
        notifications: {
          email: emailSent,
          whatsapp: whatsappSent
        }
      });
    }

    res.json({
      success: true,
      message: 'Consultation booked successfully! We will contact you within 24 hours.',
      warning: 'Notification delivery may be delayed'
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({
      error: 'Booking could not be processed. Please try again or call us directly.',
      phone: '+91 97334-12222'
    });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const startServer = async () => {
  const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Database check: pending');
    console.log('Startup mode: degraded until database connection succeeds');
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Startup error: port ${PORT} is already in use. Stop the existing process or change PORT.`);
      process.exit(1);
    }

    console.error('Startup error:', error.message);
    process.exit(1);
  });

  const dbStatus = await connectDB();
  const databaseStatusMessage = dbStatus.connected
    ? `MongoDB connected: ${dbStatus.host}`
    : `MongoDB unavailable: ${dbStatus.reason}`;

  console.log(databaseStatusMessage);
  console.log(
    dbStatus.connected
      ? 'Startup mode: full'
      : 'Startup mode: degraded until the database reconnects automatically'
  );
};

startServer();
