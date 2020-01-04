import { Request, Response, NextFunction } from 'express';

import { STATUS_CODE, ERROR_RESPONSE } from '../constants';
import { validateEmail } from '../validator';
import { isString, isBoolean } from 'util';

const validateUserBody = (req: Request, res: Response, next: NextFunction) => {
  // required validate
  const bodyAttr = Object.keys(req.body);
  const isBodySatisfied = bodyAttr.every(attr =>
    ['name', 'email', 'password', 'agreeAlarm'].includes(attr),
  );

  if (!isBodySatisfied) {
    res
      .status(STATUS_CODE.UNPROCESSIBLE_ENTITY)
      .send(ERROR_RESPONSE.NO_REQUIRED_FILED);
    return;
  }

  const { name, email, agreeAlarm } = req.body;

  // type validate
  const isEmail = validateEmail(email);
  if (!isEmail) {
    res
      .status(STATUS_CODE.UNPROCESSIBLE_ENTITY)
      .send(ERROR_RESPONSE.INVALID_EMAIL);
    return; // return 하지 않으면 next로 이동합니다!
  }
  if (!isString(name) || !isBoolean(agreeAlarm)) {
    res
      .status(STATUS_CODE.UNPROCESSIBLE_ENTITY)
      .send(ERROR_RESPONSE.INVALID_TYPE);
    return;
  }

  next();
};

export default validateUserBody;
