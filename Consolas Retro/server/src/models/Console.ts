import mongoose, { Schema, Document } from 'mongoose';

export interface IConsole extends Document {
  name: string;
  brand: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  createdAt: Date;
}

const ConsoleSchema: Schema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IConsole>('Console', ConsoleSchema);
