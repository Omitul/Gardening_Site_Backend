import { TUserModel } from '../user/user.model';
import { Tpost } from './post.interface';
import { TPostModel } from './post.model';

const CreatePostIntoDb = async (payload: Tpost) => {
  const result = await TPostModel.create(payload);

  const user = await TUserModel.findById(result.author._id);
  return result;
};

const getPostFromDb = async () => {
  const result = await TPostModel.find();

  // console.log(result.author);
  // const user = await TUserModel.findById(result.author._id);
  // console.log(user);
  return result;
};

const UpdatePostIntoDb = async (id: string, payload: Partial<Tpost>) => {
  const result = await TPostModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const DeletePostFromDb = async (id: string) => {
  const result = await TPostModel.findByIdAndDelete(id);
  return result;
};

export const PostServices = {
  CreatePostIntoDb,
  UpdatePostIntoDb,
  DeletePostFromDb,
  getPostFromDb,
};
