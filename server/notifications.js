import axios from 'axios';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendEmailNotification = async (bookingData) => {
  try {
    if (!process.env.BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY is not configured');
    }

    if (!process.env.COUNSELOR_EMAIL) {
      throw new Error('COUNSELOR_EMAIL is not configured');
    }

    const {
      name,
      email,
      phone,
      service,
      message,
      preferredDate,
      preferredTime,
    } = bookingData;

    const normalizedPhone = phone.startsWith('+')
      ? phone
      : '+91 ' + phone.replace(/^0/, '').replace(/(\d{5})(\d{5})/, '$1 $2');

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2 style="color:#1f2937;">New Consultation Booking Received</h2>
        <hr />

        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${normalizedPhone}</p>
        <p><strong>Service Required:</strong> ${service}</p>

        <h3 style="margin-top:20px;">Client Message</h3>
        <p style="background:#f9fafb; padding:10px; border-left:4px solid #2563eb;">
          ${message || 'No message provided'}
        </p>

        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>

        <p style="margin-top:20px;">
          Please connect with the client within 24 hours to confirm the consultation.
        </p>

        <p style="color:#6b7280; font-size:12px; margin-top:30px;">
          - Website Booking System
        </p>
      </div>
    `;

    const senderEmail = process.env.BREVO_SENDER_EMAIL || process.env.COUNSELOR_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || 'Website Booking System';

    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: process.env.COUNSELOR_EMAIL,
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `New Consultation Booking - ${name}`,
        htmlContent: html,
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'content-type': 'application/json',
        },
      }
    );

    console.log('Email sent via Brevo:', response.data.messageId);
    return { success: true, messageId: response.data.messageId };
  } catch (error) {
    const details = error.response?.data?.message || error.message;
    console.error('Email error:', details);
    return { success: false, error: details };
  }
};

export const sendWhatsAppNotification = async (bookingData) => {
  try {
    if (!process.env.TWILIO_PHONE_NUMBER || !process.env.COUNSELOR_PHONE) {
      throw new Error('Twilio sender or counselor phone is not configured');
    }

    const {
      name,
      phone,
      service,
      message,
      preferredDate,
      preferredTime,
    } = bookingData;

    const normalizedPhone = phone.startsWith('+')
      ? phone
      : '+91 ' + phone.replace(/^0/, '').replace(/(\d{5})(\d{5})/, '$1 $2');

    const whatsappMessage = `
New Consultation Booking Received

Client Name: ${name}
Service Required: ${service}
Contact Number: ${normalizedPhone}

Client Message:
"${message || 'No message provided'}"

Preferred Date: ${preferredDate || 'Not specified'}
Preferred Time: ${preferredTime || 'Not specified'}

Please connect with the client within 24 hours to confirm the consultation.

Website Booking System
    `.trim();

    console.log('Sending counselor WhatsApp notification to:', process.env.COUNSELOR_PHONE);
    console.log('Client contact included in message:', normalizedPhone);

    const result = await twilioClient.messages.create({
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${process.env.COUNSELOR_PHONE}`,
      body: whatsappMessage,
    });

    console.log('WhatsApp sent SID:', result.sid);
    return { success: true, sid: result.sid };
  } catch (error) {
    console.error('WhatsApp error:', error.message);
    return { success: false, error: error.message };
  }
};

export const sendBookingNotifications = async (bookingData) => {
  console.log('Sending notifications for:', bookingData.name);

  const email = await sendEmailNotification(bookingData);
  const whatsapp = await sendWhatsAppNotification(bookingData);

  return { email, whatsapp };
};
