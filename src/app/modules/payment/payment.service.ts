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

  return `
    <style>
      h1 {
        color: green;
        font-family: Arial, sans-serif;
        font-size: 80px;
        text-align: center;
        margin-top: 50px;
      }
    </style>
    <h1>Payment ${status}</h1>
  `;
};

export const paymentServices = {
  ConfirmationService,
};
