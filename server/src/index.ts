import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import UserRouter from './routes/user';
import { API_ROUTE } from './constants';
import PartyRouter from './routes/party';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(API_ROUTE.USERS, UserRouter);
app.use(API_ROUTE.PARTIES, PartyRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log('start');
});
