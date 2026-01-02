import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  machinery: string[];
  priceEstimate: string;
  imageUrl: string;
}

const ServiceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  machinery: { type: [String], required: true },
  priceEstimate: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

export default mongoose.model<IService>('Service', ServiceSchema);
