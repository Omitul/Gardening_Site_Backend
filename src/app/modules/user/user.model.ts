import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
import { required } from 'joi';

const TUserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  verified: { type: Boolean, default: false },
  accountType: { type: String, enum: ['basic', 'premium'], default: 'basic' },
});

TUserSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(user.password, Number(config.salt_round));
  next();
});

TUserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
TUserSchema.index({ email: 1 }, { unique: true });

export const TUserModel = model<TUser>('User', TUserSchema);
