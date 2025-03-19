import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from './config/env';
import { router } from './routes';
import { connectDb } from './config/mongo/mongodb';
import { init } from './seed/init';

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(router);

  connectDb();
  init();

  app.listen(PORT, () => {
    console.log(`Server running on: http://locahost:${PORT}`);
  });
};
