import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid';

import PartyModel from '../model/party';
import ServiceModel from '../model/service';
import { ID } from '../constants';

const PartyController = {
  async getPartyWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const party = await PartyModel.getPartyWithId(Id);
    res.send(party);
  },

  async getPartyListWithUserId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const Id = Number(req.query['userid']);
    const partyList = await PartyModel.getPartyListWithUserId(Id);
    res.send(partyList);
  },

  async createParty(req: Request, res: Response, next: NextFunction) {
    const createParty = req.body;
    const service = await ServiceModel.getServiceWithId(
      createParty.servicename,
    );
    const { id: serviceId, capacity } = service;

    createParty.status = 0;
    createParty.personnel = 1;
    createParty.capacity = capacity;
    createParty.authKey = uuid();
    createParty.isAccountValid = false;
    createParty.serviceId = serviceId;

    const party = await PartyModel.createParty(createParty);
    res.send(party);
  },
};

export default PartyController;
