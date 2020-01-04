import { Request } from 'express';
import PartyModel from '../model/party';

const PartyService = {
  async findPartyList(req: Request) {
    const userid = req.query['userid'];
    if (userid) return await PartyModel.getPartyListWithUserId(Number(userid));
    return await PartyModel.getPartyList();
  },
};

export default PartyService;
