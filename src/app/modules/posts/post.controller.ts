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

const UpdatePost = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await PostServices.UpdatePostIntoDb(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post updated successfully',
    data: result,
  });
});

const DeletePost = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await PostServices.DeletePostFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post deleted successfully',
    data: result,
  });
});

export const PostController = {
  createPost,
  DeletePost,
  UpdatePost,
};
