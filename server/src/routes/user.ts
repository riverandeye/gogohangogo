import { Router } from 'express';

import { API_PARAM } from '../constants';
import UserController from '../controller/user';
import validateIdParam from '../middleware/validate-id-param';
import validateUserBody from '../middleware/validate-user-body';
import validateEmailBody from '../middleware/validate-email-body';

const UserRouter = Router();

UserRouter.post(API_PARAM.USER.SUBSCRIBE, UserController.subscribeAlarm);
UserRouter.delete(API_PARAM.USER.UNSUBSCRIBE, UserController.unSubscribeAlarm);
UserRouter.get(API_PARAM.USER.CHECK_ALARM, UserController.checkAlarm);

UserRouter.get(
  API_PARAM.USER.ID,
  validateIdParam,
  UserController.getUserWithId,
);

UserRouter.patch(API_PARAM.USER.ID, validateIdParam, UserController.updateUser);

UserRouter.post(
  '/',
  validateUserBody,
  UserController.checkDuplicateUserEmail,
  UserController.createUser,
);

UserRouter.post(
  API_PARAM.USER.REVERIFY,
  validateEmailBody,
  UserController.sendReVerificationMail,
);

UserRouter.get(API_PARAM.USER.VERIFY, UserController.verifyUser);

export default UserRouter;
