import { TUser } from './user.interface';
import { TUserModel } from './user.model';

const CreateUserIntoDb = async (payload: TUser) => {
  const result = await TUserModel.create(payload);
  return result;
};

export const getUserFromDb = async (userId: string) => {
  const user = await TUserModel.findById(userId)
    .populate('followers')
    .populate('following')
    .populate({
      path: 'favourites',
      populate: {
        path: 'author',
      },
    })
    .exec();
  return user;
};

const UpdateUserIntoDb = async (id: string, payload: Partial<TUser>) => {
  const result = await TUserModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  console.log('Update result:', result);
  return result;
};

const postId = '66fb222161aad154c96e3b3d';

export const UserServices = {
  CreateUserIntoDb,
  getUserFromDb,
  UpdateUserIntoDb,
};
