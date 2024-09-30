import config from '../../config';
import bcrypt from 'bcrypt';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import { TUserModel } from '../user/user.model';
const loginUser = async (payload: TLoginUser) => {
  const user = await TUserModel.findOne({ email: payload.email }).select(
    '+password',
  );

  console.log(user);
  if (!user) {
    throw new Error('User does not exist!');
  }

  const isMatch = await bcrypt.compare(payload.password, user.password);
  console.log('ismatch', isMatch);
  console.log(user.password);
  console.log(payload.password);
  if (!isMatch) {
    throw new Error('Incorrect password!');
  }

  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires as string,
  );

  return {
    token,
    user,
  };
};

export const AuthServices = {
  loginUser,
};
