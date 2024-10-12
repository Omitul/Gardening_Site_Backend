import catchAsync from '../../utils/catchAsync';
import { paymentServices } from './payment.service';

const confirmation = catchAsync(async (req, res) => {
  const { transactionId, status } = req.query;
  // console.log('status', status);
  // console.log('txID na?', transactionId);
  const result = await paymentServices.ConfirmationService(
    transactionId as string,
    status as string,
  );

  res.send(result);
});

export const paymentController = { confirmation };
