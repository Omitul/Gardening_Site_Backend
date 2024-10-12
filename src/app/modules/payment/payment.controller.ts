import catchAsync from '../../utils/catchAsync';
import { paymentServices } from './payment.service';

const confirmation = catchAsync(async (req, res) => {
  const res = paymentServices.ConfirmationService();
  res.send(`<h1>Payment Success</h1>`);
});

export const paymentController = { confirmation };
