import { Router } from 'express';

import { API_PARAM } from '../constants';
import UserPartyController from '../controller/userparty';
import validateUserBody from '../middleware/validate-user-body';
import validateEmailBody from '../middleware/validate-email-body';
import { doAsync } from '../utils/do-async';
import validateAuthBody from '../middleware/validate-auth-body';

const UserRouter = Router();
UserRouter.post('/', doAsync(UserPartyController.createUserParty));

export default UserRouter;
