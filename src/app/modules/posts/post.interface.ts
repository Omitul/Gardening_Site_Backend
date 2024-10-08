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
  videos: string[];
  favourite: string[];
  upvoted: boolean;
  downvoted: boolean;
  comments: Types.ObjectId[];
};
