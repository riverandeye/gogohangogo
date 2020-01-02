import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid';
import UserModel from '../model/user';
import { ID, AUTHKEY, ERROR_RESPONSE, STATUS_CODE } from '../constants';
import EmailService from '../service/mail';
import { User } from '../model/Interface/user';

const UserController = {
  async getUserWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const user: User = await UserModel.getUserWithId(Id);
    res.send(user);
  },

  async updateUser(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const updatedUser = req.body;
    await UserModel.updateUser(Id, updatedUser);
    res.send(await UserModel.getUserWithId(Id));
  },

  // create user
  async checkDuplicateUserEmail(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const email = req.body.email;
    const users: User[] = await UserModel.getUserWithEmail(email);
    if (users.length > 0) {
      res.status(STATUS_CODE.BAD_REQUEST).send(ERROR_RESPONSE.DUPLICATE_EMAIL);
      return;
    }

    next();
  },

  async createUser(req: Request, res: Response, next: NextFunction) {
    const createdUser = req.body;
    createdUser.authKey = uuid();
    await UserModel.createUser(createdUser);

    // send verification email
    await EmailService.sendVerificationMail(
      createdUser.email,
      createdUser.authKey,
    );
    res.send(await UserModel.getUserWithEmail(createdUser.email));
  },

  // verify
  async verifyUser(req: Request, res: Response, next: NextFunction) {
    const authKey = String(req.params[AUTHKEY]);
    const users: User[] = await UserModel.getUserWithAuthKey(authKey);
    console.log(users);
    if (users.length !== 1) {
      res.status(STATUS_CODE.BAD_REQUEST).send(ERROR_RESPONSE.INVALID_AUTH_KEY);
      return;
    }
    await UserModel.updateUser(users[0].id, { isValid: true });

    // TODO: need to be add our site url
    res
      .status(STATUS_CODE.OK)
      .redirect(
        `http://${process.env.SERVER_HOST}:${
          process.env.SERVER_PORT
        }/users/${String(users[0].id)}/`,
      );
  },

  // reverify
  async sendReVerificationMail(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const Id = Number(req.params[ID]);
    const user: User = (await UserModel.getUserWithId(Id))[0];

    res.send(await EmailService.sendVerificationMail(user.email, user.authKey));
  },
};

export default UserController;
