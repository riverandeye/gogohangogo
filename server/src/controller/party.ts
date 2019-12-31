import { Request, Response, NextFunction } from 'express';

import PartyModel from '../model/party';
import { ID } from '../constants';

const PartyController = {
  async getPartyWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const party = await PartyModel.getPartyWithId(Id);
    res.send(party);
  },
};

export default PartyController;
