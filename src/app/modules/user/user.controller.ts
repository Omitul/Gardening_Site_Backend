import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.CreateUserIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Registered succesfully',
    data: result,
  });
});

const GetUser = catchAsync(async (req, res) => {
  const user = req.params.id.trim();
  const result = await UserServices.getUserFromDb(user);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User found succesfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  GetUser,
};
