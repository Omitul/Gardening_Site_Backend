import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { CommentServices } from './comment.service';

const createUser = catchAsync(async (req, res) => {
  const result = await CommentServices.CreateCommentIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment posted succesfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
