import { model, Schema } from 'mongoose';
import { TComment } from './comment.interface';

const CommentSchema = new Schema({
  content: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true }, // Change to ObjectId
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const TCommentModel = model<TComment>('Comment', CommentSchema);
