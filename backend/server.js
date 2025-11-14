import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://info_db_user:4yd0ISw7yeMBEPaR@cluster0.wquhkij.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});

// MongoDB Schemas
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

const QuoteRequest = mongoose.model('QuoteRequest', quoteRequestSchema);
const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

// API Routes

// Quote Request endpoint (from Touch component)
app.post('/api/contact/request/', async (req, res) => {
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

    res.status(201).json({
      message: 'Quote request submitted successfully',
      data: quoteRequest
    });
  } catch (error) {
    console.error('Error saving quote request:', error);
    res.status(500).json({ error: 'Failed to save quote request' });
  }
});

// Contact Message endpoint (from ContactPage)
app.post('/api/contact/send/', async (req, res) => {
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

    res.status(201).json({
      message: 'Message sent successfully',
      data: contactMessage
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

