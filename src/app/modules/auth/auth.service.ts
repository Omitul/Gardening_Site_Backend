import config from '../../config';
import bcrypt from 'bcrypt';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import { TUserModel } from '../user/user.model';
import { sendEmail } from '../../utils/sendEmail';
import jwt from 'jsonwebtoken';
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

const sendResetPasswordEmail = async (email: string) => {
  const user = await TUserModel.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }

  //unique token!!!!
  const resetToken = jwt.sign(
    { id: user._id },
    process.env.JWT_ACCESS_SECRET as string,
    {
      expiresIn: '1h',
    },
  );

  //my frontend new-password page url with token
  const resetUrl = `http://localhost:3000/login/forget-password/new-password?token=${resetToken}`;

  console.log('userEmail', user.email);
  await sendEmail({
    to: user.email,
    subject: 'Password Reset Request',
    html: `<p>You requested a password reset. Click the link below to reset your password:</p>
           <a href="${resetUrl}">Reset Password</a>`,
  });
  return { message: 'Password reset email sent successfully.' };
};

export const AuthServices = {
  loginUser,
  sendResetPasswordEmail,
};
