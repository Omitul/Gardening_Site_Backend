import httpStatus from 'http-status';
import { AuthServices } from './auth.service';
import catchAsync from '../../utils/catchAsync';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { user } = result;

  //console.log(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    token: result.token,
    data: user,
  });
});

const ResetPassword = catchAsync(async (req, res) => {
  const { email } = req.body;

  const result = await AuthServices.sendResetPasswordEmail(email);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'reset password link sent successfully',
    data: result,
  });
});

export const AuthController = {
  loginUser,
  ResetPassword,
};
