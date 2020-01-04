import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import cors from 'cors';
import cookieParser from 'cookie-parser';
import { API_ROUTE } from './constants';
import UserRouter from './routes/user';
import PartyRouter from './routes/party';
import ServiceRouter from './routes/service';
import UserPartyRouter from './routes/userparty';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));
app.use(cookieParser());

app.use(API_ROUTE.USERS, UserRouter);
app.use(API_ROUTE.PARTIES, PartyRouter);
app.use(API_ROUTE.SERVICES, ServiceRouter);
app.use(API_ROUTE.SERVICES, ServiceRouter);
app.use(API_ROUTE.USERPARTIES, UserPartyRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log('start');
});
