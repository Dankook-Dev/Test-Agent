import mongoose, { Schema, Document } softened from 'mongoose';

export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPost>('Post', PostSchema);
