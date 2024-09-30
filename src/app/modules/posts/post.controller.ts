import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { PostServices } from './post.service';

const createPost = catchAsync(async (req, res) => {
  const result = await PostServices.CreatePostIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post Uploaded succesfully',
    data: result,
  });
});

export const PostController = {
  createPost,
};
