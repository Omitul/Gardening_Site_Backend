import { model, Schema } from 'mongoose';
import { Torder } from './order.interface';

const TOrderSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  price: { type: String, required: true },
  address: { type: String, required: true },
});

export const TOrderModel = model<Torder>('Order', TOrderSchema);
