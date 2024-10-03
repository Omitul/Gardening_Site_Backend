import { TUser } from './user.interface';
import { TUserModel } from './user.model';

const CreateUserIntoDb = async (payload: TUser) => {
  const result = await TUserModel.create(payload);
  return result;
};

export const getUserFromDb = async (userId: string) => {
  const user = await TUserModel.findById(userId);
  return user;
};

const postId = '66fb222161aad154c96e3b3d';

export const UserServices = {
  CreateUserIntoDb,
  getUserFromDb,
};
