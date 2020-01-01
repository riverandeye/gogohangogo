import { Request, Response, NextFunction } from 'express';

import { ERROR_CODE, ERROR_MESSAGE, ERROR_RESPONSE } from '../constants';
import { validateEmail } from '../validator';
import { isString, isBoolean } from 'util';

const validateUserBody = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, agreeAlarm} = req.body
    const isEmail = validateEmail(email);
    if(!isEmail){
        res.status(ERROR_CODE.UNPROCESSIBLE_ENTITY).send(ERROR_RESPONSE.INVALID_EMAIL);
        return; // return 하지 않으면 next로 이동합니다!
    }
    if(!isString(name) || !isBoolean(agreeAlarm)){
        res.status(ERROR_CODE.UNPROCESSIBLE_ENTITY).send(ERROR_RESPONSE.INVALID_TYPE);
        return;
    }

    next();
 }

 export default validateUserBody;