export const ID = 'id';
export const NAME = 'name';
export const AUTHKEY = 'authKey';
export const MAXAGE = 60 * 60 * 1000;

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
    AUTHKEY: 'authKey',
    PASSWORD: 'password',
    AVATAR: 'avatar',
    AGREEALARM: 'agreeAlarm',
    PRIORITY: 'priority',
    ISVALID: 'isValid',
  },

  USERPARTIES: {
    USERID: 'userId',
    PARTYID: 'partyId',
    CREATEDAT: 'createdAt',
    UPDATEDAT: 'updatedAt',
    ISDEPOSITED: 'isDeposited',
    ISADMIN: 'isAdmin',
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
    DEFAULT: `/`,
    ID: `/:${ID}`,
    PARTY_LIST: `/:${ID}/parties`,
    SUBSCRIBE: `/:${ID}/subscribe`,
    UNSUBSCRIBE: `/:${ID}/unsubscribe`,
    CHECK_ALARM: `/:${ID}/check`,
    VERIFY: `/verify/:${AUTHKEY}`,
    REVERIFY: `/reverify/:${ID}`,
    LOGIN: `/login`,
  },

  PARTIES: {
    ID: `/:${ID}`,
    DEFAULT: `/`,
  },
};

export const API_ROUTE = {
  USERS: '/users',
  PARTIES: '/parties',
};

export const REGEX = {
  NATURAL_NUMBER: /^[1-9]\d*$/,
  EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNPROCESSIBLE_ENTITY: 422,
  SERVER_ERROR: 500,
};

const ERROR_MESSAGE = {
  INVALID_ID: `올바르지 않은 ID로 요청하셨습니다.`,
  INVALID_EMAIL: `올바르지 않은 이메일입니다.`,
  INVALID_TYPE: `올바르지 않은 타입입니다.`,
  DUPLICATE_EMAIL: `이미 존재하는 이메일입니다.`,
  INVALID_AUTH_KEY: `유효하지 않은 인증 키입니다.`,
  NO_REQUIRED_FILED: `필요 필드가 존재하지 않습니다.`,
  WRONG_PASSWORD: `잘못된 비밀번호를 입력하였습니다.`,
  USER_NOT_EXIST: `해당 사용자가 존재하지 않습니다.`,
};

export const ERROR_RESPONSE = {
  INVALID_ID: {
    message: ERROR_MESSAGE.INVALID_ID,
  },
  INVALID_EMAIL: {
    message: ERROR_MESSAGE.INVALID_EMAIL,
  },
  INVALID_TYPE: {
    message: ERROR_MESSAGE.INVALID_TYPE,
  },
  DUPLICATE_EMAIL: {
    message: ERROR_MESSAGE.DUPLICATE_EMAIL,
  },
  INVALID_AUTH_KEY: {
    message: ERROR_MESSAGE.INVALID_AUTH_KEY,
  },
  NO_REQUIRED_FILED: {
    message: ERROR_MESSAGE.NO_REQUIRED_FILED,
  },
  WRONG_PASSWORD: {
    message: ERROR_MESSAGE.WRONG_PASSWORD,
  },
  USER_NOT_EXIST: {
    message: ERROR_MESSAGE.USER_NOT_EXIST,
  },
};

export const MAIL = {
  MAIL_SUBJECT: `[NBread] 이메일 인증`,
};

export const AVATAR =
  'https://publicdomainvectors.org/photos/abstract-user-flat-3.png';

export const ALARM_MESSAGE = {
  SUBSCRIBE_SUCCESS: {
    title: '푸시 알람 등록',
    body: '푸시 알람 등록에 성공하셨습니다.',
    icon: '/test.png',
  },

  CHECK_SUBSCRIBE: {
    title: '푸시 알람 확인',
    body: '푸시 알람 확인에 성공하셨습니다.',
    icon: '/test.png',
  },
};
