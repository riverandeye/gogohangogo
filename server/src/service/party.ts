import { Request } from 'express';
import PartyModel from '../model/party';
import { Party } from './interface/party';
import UserService from './user';

const PartyService = {
  async findPartyList(req: Request) {
    const userid = req.query['userid'];
    if (userid) return await PartyModel.getPartyListWithUserId(Number(userid));
    return await PartyModel.getPartyList();
  },

  async findAndAddAdminUser(partyList: Party[]) {
    const partyListWithAdminUserPromise = partyList.map(async party => {
      const adminUserId = party.adminUserId;
      const adminUser = await UserService.findUserWithId(adminUserId);
      const partyWithAdminUser = { ...party, adminUser };
      return partyWithAdminUser;
    });
    const partyListWithAdminUser = Promise.all(partyListWithAdminUserPromise);
    return partyListWithAdminUser;
  },
};

export default PartyService;
