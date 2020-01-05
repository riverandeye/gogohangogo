import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid';

import PartyModel from '../model/party';
import PartyService from '../service/party';
import { ID, PARTY_ID, STATUS_CODE } from '../constants';

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
    const userId = Number(req.params[ID]);
    const partyList = await PartyModel.getPartyListWithUserId(userId);
    res.send(partyList);
  },

  async createParty(req: Request, res: Response, next: NextFunction) {
    const createParty = req.body;

    createParty.status = 0;
    createParty.personnel = 1;
    createParty.authKey = uuid();
    createParty.isAccountValid = false;

    const party = await PartyModel.createParty(createParty);
    res.send(party);
  },

  async updateParty(req: Request, res: Response, next: NextFunction) {
    const partyId = Number(req.params[ID]);
    const updatedParty = req.body;
    await PartyModel.updateParty(partyId, updatedParty);
    res.send(await PartyModel.getPartyWithId(partyId));
  },

  async leaveParty(req: Request, res: Response, next: NextFunction) {
    const partyId = Number(req.params[PARTY_ID]);
    const userId = Number(req.params[ID]);

    await PartyModel.leaveParty(partyId, userId);
    res.status(STATUS_CODE.NO_CONTENT).send({});
  },
};

export default PartyController;
