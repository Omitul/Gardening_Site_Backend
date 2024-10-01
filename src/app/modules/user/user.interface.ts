import { Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  role: 'user' | 'admin';
  following?: string[];
  followers?: string[];
  verified?: boolean;
  posts?: Types.ObjectId[];
  accountType?: 'basic' | 'premium';
};

export type TUserRole = keyof typeof USER_ROLE;
