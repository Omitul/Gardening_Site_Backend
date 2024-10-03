import { model, Schema } from 'mongoose';

const CommentSchema = new Schema({
  content: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const TUserModel = model('Comment', CommentSchema);
