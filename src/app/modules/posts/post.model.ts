import { model, Schema } from 'mongoose';
import { Tpost } from './post.interface';

const TPostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  upvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  isPremium: { type: Boolean, default: false },
  images: [{ type: String }],
  videos: [{ type: String }],
});

export const TPostModel = model<Tpost>('Post', TPostSchema);
