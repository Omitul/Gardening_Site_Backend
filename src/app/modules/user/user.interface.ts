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
  posts?: string[];
  accountType?: 'basic' | 'premium';
};

export type TUserRole = keyof typeof USER_ROLE;
