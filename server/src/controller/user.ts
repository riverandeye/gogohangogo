import { Request, Response, NextFunction } from 'express';

import UserModel from '../model/user';
import { ID } from '../constants';

const UserController = {
  async getUserWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const user = await UserModel.getUserWithId(Id);
    res.send(user);
  },
};

export default UserController;
