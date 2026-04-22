import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const defaultAllowedOrigins = [
  'https://braymontassetgroup.com',
  'https://www.braymontassetgroup.com',
  'https://braymontassetgroup-frontend-2n6y.onrender.com',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000'
];

const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : defaultAllowedOrigins;

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());

let isMongoConnected = false;

async function connectMongo() {
  if (isMongoConnected || mongoose.connection.readyState === 1) {
    return;
  }

  const mongodbUri = process.env.MONGODB_URI;
  if (!mongodbUri) {
    throw new Error('MONGODB_URI is required');
  }

  await mongoose.connect(mongodbUri, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000
  });

  isMongoConnected = true;
  console.log('✅ Connected to MongoDB');
}

async function requireMongo(req, res, next) {
  try {
    await connectMongo();
    return next();
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    return res.status(500).json({ error: 'Failed to connect to database' });
  }
}

const quoteRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  area_size: { type: String, default: '' },
  budget: { type: String, default: '' },
  message: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, default: '' },
  message: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const QuoteRequest = mongoose.models.QuoteRequest || mongoose.model('QuoteRequest', quoteRequestSchema);
const ContactMessage = mongoose.models.ContactMessage || mongoose.model('ContactMessage', contactMessageSchema);

app.get('/', (req, res) => {
  res.json({
    message: 'Braymont backend API',
    routes: ['/api/health', '/api/contact/request/', '/api/contact/send/']
  });
});

app.get('/api/health', async (req, res) => {
  const dbState = mongoose.connection.readyState;
  return res.json({
    status: 'OK',
    dbConnected: dbState === 1,
    dbState,
    allowedOrigins
  });
});

app.post('/api/contact/request/', requireMongo, async (req, res) => {
  try {
    const { name, email, area_size, budget, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const quoteRequest = new QuoteRequest({
      name,
      email,
      area_size: area_size || '',
      budget: budget || '',
      message: message || ''
    });

    await quoteRequest.save();

    return res.status(201).json({
      message: 'Quote request submitted successfully',
      data: quoteRequest
    });
  } catch (error) {
    console.error('Error saving quote request:', error);
    return res.status(500).json({ error: 'Failed to save quote request' });
  }
});

app.post('/api/contact/send/', requireMongo, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const contactMessage = new ContactMessage({
      name,
      email,
      subject: subject || '',
      message: message || ''
    });

    await contactMessage.save();

    return res.status(201).json({
      message: 'Message sent successfully',
      data: contactMessage
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
});

export async function startServer() {
  try {
    await connectMongo();
  } catch (error) {
    console.warn('⚠️ MongoDB startup warning:', error.message);
  }
}

export { app };
