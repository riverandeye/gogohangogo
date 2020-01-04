import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid';

import PartyModel from '../model/party';
import PartyService from '../service/party';
import ServiceModel from '../model/service';
import { ID } from '../constants';

const PartyController = {
  async getPartyWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const party = await PartyModel.getPartyWithId(Id);
    res.send(party);
  },

  async findPartyList(req: Request, res: Response, next: NextFunction) {
    const partyList = await PartyModel.getPartyList();
    const partyListWithAdminUser = await PartyService.findAndAddAdminUser(
      partyList,
    );
    res.send(partyListWithAdminUser);
  },

  async findMyPartyList(req: Request, res: Response, next: NextFunction) {
    const userid = Number(req.params[ID]);
    const partyList = await PartyModel.getPartyListWithUserId(userid);
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
