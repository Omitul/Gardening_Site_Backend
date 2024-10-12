import { initiatePayment } from '../payment/payment.utils';
import { Torder } from './order.interface';
import { TOrderModel } from './order.model';

const CreateOrderIntoDb = async (payload: Torder) => {
  const transactionId = `TXN-${Date.now()}`;
  const makeOrder = {
    ...payload,

    transactionId: payload.transactionId || transactionId,
  };

  await TOrderModel.create(makeOrder);

  const payment_data = {
    transactionId,
    amount: payload.price,
    customerName: payload.name,
    customerEmail: payload.email,
    customerPhone: payload.contactNo,
    customerAddress: payload.address,
  };

  const payment = await initiatePayment(payment_data);

  return payment;
};

export const OrderServices = {
  CreateOrderIntoDb,
};
