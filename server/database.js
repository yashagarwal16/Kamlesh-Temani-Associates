import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let retryTimer = null;
let connectionState = {
  connected: false,
  reason: 'Database status not checked',
  host: null
};

const getMongoConnectOptions = () => ({
  serverSelectionTimeoutMS: 5000,
  // Atlas TLS handshakes are often more reliable over IPv4 on Windows/home networks.
  family: Number(process.env.MONGODB_ADDRESS_FAMILY || 4),
});

const getMongoErrorReason = (error) => {
  const rawMessage = error?.message || 'Unknown MongoDB connection error';

  if (
    rawMessage.includes('tlsv1 alert internal error') ||
    rawMessage.includes('SSL alert number 80')
  ) {
    return `${rawMessage}. TLS handshake with MongoDB failed. Check Atlas network access, local firewall/antivirus SSL inspection, VPN/proxy settings, and confirm the system date/time are correct.`;
  }

  return rawMessage;
};

const updateConnectionState = (nextState) => {
  connectionState = {
    ...connectionState,
    ...nextState
  };
};

const scheduleReconnect = () => {
  if (retryTimer || !process.env.MONGODB_URI) {
    return;
  }

  retryTimer = setTimeout(async () => {
    retryTimer = null;
    await connectDB();
  }, 5000);
};

mongoose.connection.on('connected', () => {
  updateConnectionState({
    connected: true,
    reason: null,
    host: mongoose.connection.host
  });
  console.log(`MongoDB connected: ${mongoose.connection.host}`);
});

mongoose.connection.on('disconnected', () => {
  updateConnectionState({
    connected: false,
    reason: 'MongoDB connection lost',
    host: null
  });
  console.warn('MongoDB disconnected. Retrying in 5 seconds.');
  scheduleReconnect();
});

mongoose.connection.on('error', (error) => {
  updateConnectionState({
    connected: false,
    reason: error.message,
    host: null
  });
  console.error(`MongoDB error: ${error.message}`);
});

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return {
      connected: true,
      host: mongoose.connection.host
    };
  }

  try {
    if (!process.env.MONGODB_URI) {
      const status = {
        connected: false,
        reason: 'MongoDB URI is not configured'
      };
      updateConnectionState(status);
      return status;
    }

    const conn = await mongoose.connect(
      process.env.MONGODB_URI,
      getMongoConnectOptions()
    );

    const status = {
      connected: true,
      host: conn.connection.host
    };
    updateConnectionState({
      ...status,
      reason: null
    });
    return status;
  } catch (error) {
    const status = {
      connected: false,
      reason: getMongoErrorReason(error)
    };
    updateConnectionState(status);
    scheduleReconnect();
    return status;
  }
};

export const getDatabaseStatus = () => ({
  ...connectionState
});

export default connectDB;
