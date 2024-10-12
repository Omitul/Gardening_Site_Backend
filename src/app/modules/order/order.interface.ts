export type Torder = {
  name: string;
  email: string;
  contactNo: string;
  price: string;
  address: string;
  paymentStatus?: 'Pending' | 'Paid' | 'Failed';
  transactionId?: string;
};
