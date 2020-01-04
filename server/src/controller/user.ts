import { Request, Response, NextFunction } from 'express';
import webpush from 'web-push';
import uuid from 'uuid';

import UserModel from '../model/user';
import {
  ID,
  AUTHKEY,
  ERROR_RESPONSE,
  STATUS_CODE,
  ALARM_MESSAGE,
  AVATAR,
  MAXAGE,
} from '../constants';
import EmailService from '../service/mail';
import { User } from '../common/interface/user';

import UserService from '../service/user';
import pushAlarmService from '../service/push-alarm';
import { isNull } from 'util';
import { UserResponse } from './dto/user-response';

webpush.setGCMAPIKey(process.env.GOOGLE_API_KEY);
webpush.setVapidDetails(
  `mailto:${process.env.MAIL_ID}'`,
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY,
);

const UserController = {
  async getUserWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const user: User = await UserService.findUserWithId(Id);

    res.json(new UserResponse(user));
  },

  async getUserListWithPartyId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const Id = Number(req.query['partyid']);
    const userList = await UserModel.getUserListWithPartyId(Id);

    res.json(userList);
  },

  async subscribeAlarm(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const subscription = req.body;

    const user = await UserService.updateUserSubscription(Id, subscription);
    const result = await pushAlarmService.sendPushAlarmOnce(
      subscription,
      ALARM_MESSAGE.SUBSCRIBE_SUCCESS,
    );

    res.json(user);
  },

  async unSubscribeAlarm(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const user = await UserService.deleteUserSubscription(Id);

    res.json(user);
  },

  async checkAlarm(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const user: User = await UserService.findUserWithId(Id);

    const result = await pushAlarmService.sendPushAlarmOnce(
      JSON.parse(JSON.stringify(user.alarmSubscription)),
      ALARM_MESSAGE.CHECK_SUBSCRIBE,
    );
    res.status(200).send();
  },

  async updateUser(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const updatedUser = req.body;
    await UserModel.updateUser(Id, updatedUser);
    const user = await UserService.findUserWithId(Id);

    res.send(user);
  },

  // create user
  async checkDuplicateUserEmail(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const email = req.body.email;
    const isDuplicate = await UserService.checkDuplicateEmail(email);
    if (isDuplicate) {
      res.status(STATUS_CODE.BAD_REQUEST).send(ERROR_RESPONSE.DUPLICATE_EMAIL);
      return;
    }

    next();
  },

  async createUser(req: Request, res: Response, next: NextFunction) {
    const createdUser = req.body;
    // set default value
    createdUser.introduction = '';
    createdUser.avatar = AVATAR;
    createdUser.authKey = uuid();
    createdUser.alarmSubscription = {};
    createdUser.status = 1;

    await UserService.createUser(createdUser);

    // send verification email
    await EmailService.sendVerificationMail(
      createdUser.email,
      createdUser.authKey,
    );

    res.status(STATUS_CODE.CREATED).send({
      message: 'user created',
    });
  },

  // auth - login
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const { isMatched, user } = await UserService.checkUserPassword(
      email,
      password,
    );

    if (isNull(user)) {
      res.status(STATUS_CODE.BAD_REQUEST).send(ERROR_RESPONSE.USER_NOT_EXIST);
    } else if (!isMatched) {
      res.status(STATUS_CODE.BAD_REQUEST).send(ERROR_RESPONSE.WRONG_PASSWORD);
    }

    const token = UserService.createJWTToken(user);
    // set cookie with httponly
    res.cookie('token', token, { maxAge: MAXAGE, httpOnly: true });
    res.status(STATUS_CODE.OK).send({ message: 'logged in' });
  },

  // verify
  async verifyUser(req: Request, res: Response, next: NextFunction) {
    const authKey = String(req.params[AUTHKEY]);
    try {
      const user: User = await UserService.verifyUser(authKey);

      // TODO: need to be add our site url
      res
        .status(STATUS_CODE.OK)
        .redirect(
          `http://${process.env.SERVER_HOST}:${
            process.env.SERVER_PORT
          }/users/${String(user.id)}/`,
        );
    } catch (e) {
      res.status(STATUS_CODE.BAD_REQUEST).send(ERROR_RESPONSE.INVALID_AUTH_KEY);
    }
  },

  // reverify
  async sendReVerificationMail(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const Id = Number(req.params[ID]);
    const user: User = await UserService.findUserWithId(Id);

    res.status(STATUS_CODE.OK).send({ message: 'Mail is sent' });
  },
};

export default UserController;
