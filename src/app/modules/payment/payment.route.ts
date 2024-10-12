import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();

router.post('/confirmation', paymentController.confirmation);

export const paymentRoutes = router;
