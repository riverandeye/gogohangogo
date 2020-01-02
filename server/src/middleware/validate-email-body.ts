import { Request, Response, NextFunction } from 'express';

import { STATUS_CODE, ERROR_RESPONSE } from '../constants';
import { validateEmail } from '../validator';

const validateEmailBody = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const isEmail = validateEmail(email);
  if (!isEmail) {
    res
      .status(STATUS_CODE.UNPROCESSIBLE_ENTITY)
      .send(ERROR_RESPONSE.INVALID_EMAIL);
    return; // return 하지 않으면 next로 이동합니다!
  }
  next();
};

export default validateEmailBody;
