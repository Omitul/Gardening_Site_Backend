import { TUser } from './user.interface';
import TUserModel from './user.model';

const CreateUserIntoDb = async (payload: TUser) => {
  const result = await TUserModel.create(payload);
  return result;
};

export const UserServices = {
  CreateUserIntoDb,
};
