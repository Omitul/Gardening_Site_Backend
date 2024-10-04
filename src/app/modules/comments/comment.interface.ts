import { Document, ObjectId, Types } from 'mongoose';

export interface TComment extends Document {
  content: string;
  post: Types.ObjectId[];
  author: Types.ObjectId;
  createdAt?: Date;
}
