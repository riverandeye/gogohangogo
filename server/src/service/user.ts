import { PushSubscription } from 'web-push';

import UserModel from '../model/user';

const UserService = {
  async findUserWithId(Id: number) {
    const User = await UserModel.getUserWithId(Id);
    return User[0];
  },

  async updateUserSubscription(Id: number, subscription: PushSubscription) {
    const User = await UserModel.updateUserSubscription(Id, subscription);
    return User;
  },

  async deleteUserSubscription(Id: number) {
    const User = await UserModel.deleteUserSubscription(Id);
    return User;
  },
};

export default UserService;
