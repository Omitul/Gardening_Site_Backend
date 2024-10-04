import { Types } from 'mongoose';

export type TComment = {
  content: string;
  post: Types.ObjectId;
  author: Types.ObjectId;
  createdAt?: Date;
};
