import { Request, Response, NextFunction } from 'express';

import { STATUS_CODE, ERROR_RESPONSE } from '../constants';

const validateAuthBody = (req: Request, res: Response, next: NextFunction) => {
  // required validate
  const bodyAttr = Object.keys(req.body);
  const isBodySatisfied = bodyAttr.every(attr =>
    ['email', 'password'].includes(attr),
  );

  if (!isBodySatisfied) {
    res
      .status(STATUS_CODE.UNPROCESSIBLE_ENTITY)
      .send(ERROR_RESPONSE.NO_REQUIRED_FILED);
    return;
  }
  next();
};

export default validateAuthBody;
