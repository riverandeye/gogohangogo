export const ID = 'id';
export const NAME = 'name';

export const DB_TABLE = {
  USERS: 'Users',
  PARTIES: 'Parties',
  SERVICES: 'Services',
  USERPARTIES: 'UserParties',
  PARTYSTATUS: 'PartyStatus',
};

export const DB_COLUMN = {
  USERS: {
    ID,
    NAME,
    EMAIL: 'email',
    AVATAR: 'avatar',
    AGREEALARM: 'agreeAlarm',
    PRIORITY: 'priority',
    ISVALID: 'isValid',
  },

  PARTIES: {
    ID,
    CREATEDAT: 'createdAt',
    UPDATEDAT: 'updatedAt',
    STARTAT: 'startAt',
    ENDAT: 'endAt',
    TITLE: 'title',
    PERSONNEL: 'personnel',
    CAPACITY: 'capacity',
    ACCOUNTID: 'accountId',
    ACCOUNTPW: 'accountPW',
    ISACCOUNTVALID: 'isAccountValid',
    SERVICEID: 'serviceId',
    STATUS: 'status',
  },

  SERVICES: {
    ID,
    NAME,
    INTRODUCTION: 'introduction',
    CAPACITY: 'capacity',
  },

  PARTYSTATUS: {
    STATUS: 'status',
    DESCRIPTION: 'description',
  },
};

export const API_PARAM = {
  USER: {
    ID: `/:${ID}`,
  },
  PARTIES: {
    ID: `/:${ID}`,
  },
};

export const API_ROUTE = {
  USERS: '/users',
  PARTIES: '/parties',
};

export const REGEX = {
  NATURAL_NUMBER: /^[1-9]\d*$/,
};

export const ERROR_CODE = {
  UNPROCESSIBLE_ENTITY: 422,
};

export const ERROR_MESSAGE = {
  INVALID_ID: `올바르지 않은 ID로 요청하셨습니다.`,
};

export const ERROR_RESPONSE = {
  INVALID_ID: {
    message: ERROR_MESSAGE.INVALID_ID,
  },
};
