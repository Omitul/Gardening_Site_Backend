import { TComment } from './comment.interface';
import { TCommentModel } from './comment.model';

const CreateCommentIntoDb = async (payload: TComment) => {
  const result = await TCommentModel.create(payload);
  return result;
};

const UpdateCommentIntoDb = async (id: string, payload: Partial<TComment>) => {
  const result = await TCommentModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const CommentServices = {
  CreateCommentIntoDb,
  UpdateCommentIntoDb,
};
