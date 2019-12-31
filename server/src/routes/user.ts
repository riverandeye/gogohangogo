import { Router } from 'express';

import { API_PARAM } from '../constants';
import UserController from '../controller/user';
import validateIdParam from '../middleware/validate-id-param';

const UserRouter = Router();

UserRouter.get(
  API_PARAM.USER.ID,
  validateIdParam,
  UserController.getUserWithId,
);

export default UserRouter;
