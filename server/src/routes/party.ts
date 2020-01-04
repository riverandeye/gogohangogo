import { Router } from 'express';

import { API_PARAM } from '../constants';
import PartyController from '../controller/party';
import validateIdParam from '../middleware/validate-id-param';
import { doAsync } from '../utils/do-async';

const PartyRouter = Router();

PartyRouter.get(
  API_PARAM.PARTIES.ID,
  validateIdParam,
  doAsync(PartyController.getPartyWithId),
);

PartyRouter.get(
  API_PARAM.PARTIES.DEFAULT,
  doAsync(PartyController.findPartyList),
);

PartyRouter.post(
  API_PARAM.PARTIES.DEFAULT,
  doAsync(PartyController.createParty),
);

export default PartyRouter;
