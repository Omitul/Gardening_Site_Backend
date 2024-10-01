import { Document } from 'mongoose';

export interface TComment extends Document {
  content: string;
  post: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}
