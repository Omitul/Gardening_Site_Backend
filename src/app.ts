import cors from 'cors';
import express, { Request, Response } from 'express';

import globalErrorHandler from './app/middlewares/GlobalErrorHandler';
import notFound from './app/middlewares/notFound';
import { UserRoutes } from './app/modules/user/user.route';
import { AuthRoutes } from './app/modules/auth/auth.route';

const app = express();

///its a parser

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

// ///application routes
app.use('/api', UserRoutes);
app.use('/api', AuthRoutes);

// //middlewares

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

console.log(process.cwd());

app.use(globalErrorHandler);
app.use(notFound);

export default app;
