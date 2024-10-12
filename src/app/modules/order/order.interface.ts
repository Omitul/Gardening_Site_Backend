export type Torder = {
  name: string;
  email: string;
  contactNo: string;
  price: string;
  address: string;
  paymentStatus?: 'pending' | 'paid' | 'Failed';
  transactionId?: string;
};
