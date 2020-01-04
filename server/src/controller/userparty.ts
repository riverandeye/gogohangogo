import { Request, Response, NextFunction } from 'express';
import { STATUS_CODE } from '../constants';

import UserPartyModel from '../model/userparty';

const UserPartyController = {
  async createUserParty(req: Request, res: Response, next: NextFunction) {
    const createdUserParty = req.body;
    await UserPartyModel.createUserParty(createdUserParty);
    res.status(STATUS_CODE.CREATED).send({
      message: 'userparty created',
    });
  },
};

export default UserPartyController;
