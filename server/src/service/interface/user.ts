export interface User {
  id?: number;
  authKey?: string;
  password?: string;
  name?: string;
  email?: string;
  avatar?: string;
  agreeAlarm?: boolean;
  alarmSubscription?: object;
  priority?: number;
  isValid?: boolean;
}
