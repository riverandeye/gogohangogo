import { PushSubscription } from 'web-push';

import UserModel from '../model/user';
import { CreatedUser, User } from '../model/Interface/user';
import { ERROR_RESPONSE } from '../constants';
import { ERRORS } from '../errors';

const UserService = {
  async findUserWithId(Id: number) {
    const user = await UserModel.getUserWithId(Id);
    return user[0];
  },

  async createUser(user: CreatedUser) {
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
};

export default UserService;
