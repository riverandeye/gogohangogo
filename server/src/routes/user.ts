import { Router } from 'express';

import { API_PARAM } from '../constants';
import UserController from '../controller/user';
import validateIdParam from '../middleware/validate-id-param';
import validateUserBody from '../middleware/validate-user-body';
import validateEmailBody from '../middleware/validate-email-body';
import { doAsync } from '../utils/do-async';

const UserRouter = Router();

UserRouter.post(
  API_PARAM.USER.SUBSCRIBE,
  doAsync(UserController.subscribeAlarm),
);
UserRouter.delete(
  API_PARAM.USER.UNSUBSCRIBE,
  doAsync(UserController.unSubscribeAlarm),
);
UserRouter.get(API_PARAM.USER.CHECK_ALARM, doAsync(UserController.checkAlarm));

UserRouter.get(
  API_PARAM.USER.ID,
  validateIdParam,
  doAsync(UserController.getUserWithId),
);

UserRouter.patch(
  API_PARAM.USER.ID,
  validateIdParam,
  doAsync(UserController.updateUser),
);

UserRouter.post(
  '/',
  validateUserBody,
  doAsync(UserController.checkDuplicateUserEmail),
  doAsync(UserController.createUser),
);

UserRouter.post(
  API_PARAM.USER.REVERIFY,
  validateEmailBody,
  doAsync(UserController.sendReVerificationMail),
);

UserRouter.get(API_PARAM.USER.VERIFY, doAsync(UserController.verifyUser));

export default UserRouter;
