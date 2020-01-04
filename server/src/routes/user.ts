import { Router } from 'express';

import { API_PARAM } from '../constants';
import UserController from '../controller/user';
import validateIdParam from '../middleware/validate-id-param';
import validateUserBody from '../middleware/validate-user-body';
import validateEmailBody from '../middleware/validate-email-body';
import { doAsync } from '../utils/do-async';
import validateAuthBody from '../middleware/validate-auth-body';

const UserRouter = Router();

// Alarm Service API
UserRouter.post(
  API_PARAM.USER.SUBSCRIBE,
  doAsync(UserController.subscribeAlarm),
);
UserRouter.delete(
  API_PARAM.USER.UNSUBSCRIBE,
  doAsync(UserController.unSubscribeAlarm),
);
UserRouter.get(API_PARAM.USER.CHECK_ALARM, doAsync(UserController.checkAlarm));

// User Service API
UserRouter.get(
  API_PARAM.USER.ID,
  validateIdParam,
  doAsync(UserController.getUserWithId),
);

UserRouter.get(
  API_PARAM.USER.DEFAULT,
  doAsync(UserController.getUserListWithPartyId),
);

UserRouter.patch(
  API_PARAM.USER.ID,
  validateIdParam,
  doAsync(UserController.updateUser),
);

UserRouter.post(
  API_PARAM.USER.DEFAULT,
  validateUserBody,
  doAsync(UserController.checkDuplicateUserEmail),
  doAsync(UserController.createUser),
);

UserRouter.post(
  API_PARAM.USER.LOGIN,
  validateAuthBody,
  doAsync(UserController.login),
);

// MailService API
UserRouter.post(
  API_PARAM.USER.REVERIFY,
  validateEmailBody,
  doAsync(UserController.sendReVerificationMail),
);

UserRouter.get(API_PARAM.USER.VERIFY, doAsync(UserController.verifyUser));

export default UserRouter;
