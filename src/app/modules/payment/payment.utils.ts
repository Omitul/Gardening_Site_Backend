import axios from 'axios';

export const initiatePayment = async (payment_data: any) => {
  const res = await axios.post(process.env.PAYMENT_URL!, {
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    tran_id: payment_data.transactionId,
    success_url: 'http://localhost:5000/api/confirmation',
    fail_url: 'http://www.merchantdomain.com/failedpage.html',
    cancel_url: 'http://www.merchantdomain.com/cancelpage.html',
    amount: payment_data.amount,
    currency: 'BDT',
    desc: 'Merchant Registration Payment',
    cus_name: payment_data.customerName,
    cus_email: payment_data.customerEmail,
    cus_add1: payment_data.customerAddress,
    cus_add2: 'N/A',
    cus_city: 'N/A',
    cus_state: 'N/A',
    cus_postcode: 'N/A',
    cus_country: 'N/A',
    cus_phone: payment_data.customerPhone,
    type: 'json',
  });

  return res.data;
};
