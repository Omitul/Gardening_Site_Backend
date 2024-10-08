import { TComment } from './comment.interface';
import { TCommentModel } from './comment.model';

const CreateCommentIntoDb = async (payload: TComment) => {
  const result = await TCommentModel.create(payload);
  return result;
};

const getCommentFromDb = async (postId: string) => {
  const result = await TCommentModel.find({ post: postId })
    .populate('author')
    .exec();
  return result;
};

const UpdateCommentIntoDb = async (id: string, payload: Partial<TComment>) => {
  const result = await TCommentModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const DeleteCommentFromDb = async (id: string) => {
  const result = await TCommentModel.findByIdAndDelete(id);
  return result;
};

export const CommentServices = {
  CreateCommentIntoDb,
  UpdateCommentIntoDb,
  DeleteCommentFromDb,
  getCommentFromDb,
};
