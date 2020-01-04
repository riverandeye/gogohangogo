import { PushSubscription } from 'web-push';
import crypto from 'crypto';
import UserModel from '../model/user';
import { ERRORS } from '../errors';
import jwt from 'jsonwebtoken';
import { User } from './interface/user';
import { CreatedUser } from '../model/Interface/user';

const salt = '19qieu3ur7g';
const UserService = {
  async findUserWithId(Id: number) {
    const user: User[] = await UserModel.getUserWithId(Id);
    return user[0];
  },
  async checkDuplicateEmail(email: string) {
    const users: User[] = await UserModel.getUserWithEmail(email);
    return users.length > 0 ? true : false;
  },

  async createUser(user: CreatedUser) {
    const { password } = user;
    const encryptedPassword = crypto.pbkdf2Sync(
      password,
      salt,
      100000,
      64,
      'sha512',
    );
    user.password = encryptedPassword.toString();
    await UserModel.createUser(user);
  },
  // alarm part
  async updateUserSubscription(Id: number, subscription: PushSubscription) {
    const user = await UserModel.updateUserSubscription(Id, subscription);
    return user;
  },

  async deleteUserSubscription(Id: number) {
    const user = await UserModel.deleteUserSubscription(Id);
    return user;
  },

  // verify part
  async verifyUser(authKey: string) {
    const users: User[] = await UserModel.getUserWithAuthKey(authKey);
    if (users.length !== 1) {
      throw ERRORS.NOT_UNIQUE;
    }
    await UserModel.updateUser(users[0].id, { isValid: true });
    return users[0]; // TODO: need to remove later
  },

  // login part
  async checkUserPassword(email: string, password: string) {
    const users: User[] = await UserModel.getUserWithEmail(email);
    let user: User = null;
    if (users.length >= 1) {
      user = users[0];
    }
    const encryptedPassword = crypto
      .pbkdf2Sync(password, salt, 100000, 64, 'sha512')
      .toString();
    const isMatched = encryptedPassword === user.password ? true : false;
    return {
      isMatched,
      user: user,
    };
  },

  createJWTToken(user: User) {
    const userData = {
      name: user.name,
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(userData, 'shhhhh');
    return token;
  },
};

export default UserService;
