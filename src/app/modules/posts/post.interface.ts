import { Types } from 'mongoose';

export type Tpost = {
  title: string;
  content: string;
  author: Types.ObjectId;
  category: string;
  votes: number;
  createdAt: Date;
  isPremium: boolean;
  images: string[];
  upvoted: boolean;
  downvoted: boolean;
  upvotes: string[];
  downvotes: string[];
  comments: Types.ObjectId[];
};
