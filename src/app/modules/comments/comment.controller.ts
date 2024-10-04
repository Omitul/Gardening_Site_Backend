import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import { CommentServices } from './comment.service';
import { TCommentModel } from './comment.model';

const createComment = catchAsync(async (req, res) => {
  const result = await CommentServices.CreateCommentIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment posted succesfully',
    data: result,
  });
});
const getComment = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await CommentServices.getCommentFromDb(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment fetched succesfully',
    data: result,
  });
});

const UpdateComment = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await CommentServices.UpdateCommentIntoDb(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment edited successfully',
    data: result,
  });
});

const DeleteComment = catchAsync(async (req, res) => {
  const id = req.params.id.trim();
  const result = await CommentServices.DeleteCommentFromDb(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment deleted successfully',
    data: result,
  });
});

export const CommentController = {
  createComment,
  UpdateComment,
  DeleteComment,
  getComment,
};
