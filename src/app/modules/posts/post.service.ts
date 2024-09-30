import { Tpost } from './post.interface';
import { TPostModel } from './post.model';

const CreatePostIntoDb = async (payload: Tpost) => {
  const result = await TPostModel.create(payload);
  return result;
};

export const PostServices = {
  CreatePostIntoDb,
};
