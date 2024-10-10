import { model, Schema } from 'mongoose';
import { Tpost } from './post.interface';

const TPostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  votes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  isPremium: { type: Boolean, default: false },
  images: [{ type: String }],
  upvoted: { type: Boolean, default: false },
  downvoted: { type: Boolean, default: false },
  upvotes: [{ type: String }],
  downvotes: [{ type: String }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

export const TPostModel = model<Tpost>('Post', TPostSchema);
