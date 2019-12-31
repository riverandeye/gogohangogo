import { REGEX } from '../constants';

export const validateId = (Id: string) => {
  return REGEX.NATURAL_NUMBER.test(Id);
};
