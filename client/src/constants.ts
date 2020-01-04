export const dummy = 'dummy';

export const ROUTE = {
  LANDING: '/',
  MAIN: '/main',
  SUBSCRIBE: '/subscribe',
  SIGNUP: '/signup',
  MYPARTIES: '/myparties',
  SIGNUPRESULT: '/signupresult',
  NOTFOUND: '/notfound',
  PARTYDETAIL: '/parties/:id',
};

export const SERVER_ENDPOINT = {
  SUBSCRIBE: `${process.env.REACT_APP_BACKEND_HOST}/users/subscribe`,
};

export const VALIDATION_ERROR_MESSAGE = {
  INVALID_EMAIL: '유효한 이메일이 아닙니다.',
  REQUIRED_EMAIL: '이메일을 입력해주세요.',
  REQUIRED_NAME: '이름을 입력해주세요.',
  REQUIRED_PW: '비밀번호를 입력해주세요.',
  MIN_8: '8글자 이상으로 입력해주세요.',
  NON_UNIV_EMAIL: '학교 계정이 아닙니다.',
};

export const REGEX = {
  UNIV_EMAIL: /ac.kr$/,
};

export const PARTY_STATUS_MESSAGE = [
  '파티 인증 전',
  '모집 중',
  '입금 대기 중',
  '입금 완료',
  '파티 개시',
  '파티 삭제',
];
