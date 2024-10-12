import { TOrderModel } from '../order/order.model';
import { verifyPayment } from './payment.utils';

const ConfirmationService = async (transactionId: string, status: string) => {
  console.log('txid', transactionId);

  const verify_res = await verifyPayment(transactionId);

  console.log(verify_res);

  let res;
  if (verify_res && verify_res.pay_status === 'Successful') {
    res = await TOrderModel.findOneAndUpdate(
      { transactionId },
      {
        paymentStatus: 'Paid',
      },
    );
  }

  return `<h1>Payment ${status}</h1>`;
};

export const paymentServices = {
  ConfirmationService,
};
