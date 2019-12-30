import { Request, Response, NextFunction } from 'express';

import { ID, ERROR_CODE, ERROR_MESSAGE, ERROR_RESPONSE } from '../constants';
import { validateId } from '../validator';

const validateIdParam = (req: Request, res: Response, next: NextFunction) => {
  const Id = req.params[ID];
  const isValidId = validateId(Id);

  if (!isValidId) {
    res.status(ERROR_CODE.UNPROCESSIBLE_ENTITY).send(ERROR_RESPONSE.INVALID_ID);

    return; // return 하지 않으면 next로 이동합니다!
  }

  next();
};

export default validateIdParam;
