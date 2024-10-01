import { TComment } from './comment.interface';
import { TCommentModel } from './comment.model';

const CreateCommentIntoDb = async (payload: TComment) => {
  const result = await TCommentModel.create(payload);
  return result;
};

export const CommentServices = {
  CreateCommentIntoDb,
};
