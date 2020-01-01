import { Router } from 'express';

import { API_PARAM } from '../constants';
import UserController from '../controller/user';
import validateIdParam from '../middleware/validate-id-param';
import validateUserBody from '../middleware/validate-user-body';

const UserRouter = Router();

UserRouter.get(
  API_PARAM.USER.ID,
  validateIdParam,
  UserController.getUserWithId,
);

UserRouter.patch(
  API_PARAM.USER.ID, 
  validateIdParam, 
  UserController.updateUser
);

UserRouter.post(
  '/', 
  validateUserBody, 
  UserController.createUser
);

UserRouter.post(
  API_PARAM.USER.VERIFY,
  UserController.checkDuplicateUserEmail,
  UserController.sendVerificationMail,
);

export default UserRouter;
