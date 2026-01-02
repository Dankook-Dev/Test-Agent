import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Console from './models/Console';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/retro_consoles';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/consoles', async (req: Request, res: Response) => {
  try {
    const consoles = await Console.find().sort({ createdAt: -1 });
    res.json(consoles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consoles' });
  }
});

app.post('/api/consoles', async (req: Request, res: Response) => {
  try {
    const newConsole = new Console(req.body);
    const savedConsole = await newConsole.save();
    res.status(201).json(savedConsole);
  } catch (error) {
    res.status(400).json({ message: 'Error creating console' });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Retro Consoles API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
