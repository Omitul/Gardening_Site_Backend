import { Torder } from './order.interface';
import { TOrderModel } from './order.model';

const CreateOrderIntoDb = async (payload: Torder) => {
  const makeOrder = {
    ...payload,

    transactionId:
      payload.transactionId || Math.random().toString(36).substring(2, 15),
  };

  const result = await TOrderModel.create(makeOrder);
  return result;
};

export const OrderServices = {
  CreateOrderIntoDb,
};
