import { Router } from 'express';

import { API_PARAM } from '../constants';
import PartyController from '../controller/party';
import validateIdParam from '../middleware/validate-id-param';

const PartyRouter = Router();

PartyRouter.get(
  API_PARAM.PARTIES.ID,
  validateIdParam,
  PartyController.getPartyWithId,
);

export default PartyRouter;
