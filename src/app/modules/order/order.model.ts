import { model, Schema } from 'mongoose';
import { Torder } from './order.interface';

const TOrderSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    price: { type: String, required: true },
    address: { type: String, required: true },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'Failed'],
      default: 'pending',
      required: false,
    },

    transactionId: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export const TOrderModel = model<Torder>('Order', TOrderSchema);
