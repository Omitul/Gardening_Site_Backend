import { Torder } from './order.interface';
import { TOrderModel } from './order.model';

const CreateOrderIntoDb = async (payload: Torder) => {
  const result = await TOrderModel.create(payload);
  return result;
};

export const OrderServices = {
  CreateOrderIntoDb,
};
