import { Request, Response, NextFunction } from 'express';
import uuid from 'uuid';

import PartyModel from '../model/party';
import PartyService from '../service/party';
import { ID, PARTY_ID, STATUS_CODE } from '../constants';
import { Party } from '../service/interface/party';

const PartyController = {
  async getPartyWithId(req: Request, res: Response, next: NextFunction) {
    const Id = Number(req.params[ID]);
    const party = await PartyModel.getPartyWithId(Id);
    res.send(party);
  },

  async findPartyList(req: Request, res: Response, next: NextFunction) {
    if (Object.keys(req.body).length === null) {
      const partyList = await PartyModel.getPartyList();
      const partyListWithAdminUser = await PartyService.findAndAddAdminUser(
        partyList,
      );
      res.send(partyListWithAdminUser);
    }
    const Types = req.body;
    console.log(Types.sortType, Types.ottType);
    const partyList: Party[] = await PartyModel.getPartyWithOTTType(
      Types.ottType,
    );

    let sortedPartyList;
    switch (Types.sortType) {
      case 'latest':
        break;
      case 'priority':
        sortedPartyList = partyList.sort((a, b) => {
          return b.priority - a.priority;
        });

        res.send(sortedPartyList);
        break;

      default:
        break;
    }
    res.send(partyList);
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
