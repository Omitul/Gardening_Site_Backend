import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  verified: { type: Boolean, default: false },
  accountType: { type: String, enum: ['basic', 'premium'], default: 'basic' },
});

const UserModel = model<TUser>('User', UserSchema);

export default UserModel;
