import { TUserModel } from '../user/user.model';
import { Tpost } from './post.interface';
import { TPostModel } from './post.model';

const CreatePostIntoDb = async (payload: Tpost) => {
  const result = await TPostModel.create(payload);

  console.log(result.author);
  const user = await TUserModel.findById(result.author._id);
  console.log(user);
  return result;
};

export const PostServices = {
  CreatePostIntoDb,
};
