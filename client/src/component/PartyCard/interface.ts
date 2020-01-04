export interface AdminUser {
  id: number;
  name: string;
  introduction: string;
  email: string;
  avatar: string;
  password: string;
  authKey: string;
  agreeAlarm: boolean;
  alarmSubscription: boolean;
  priority: boolean;
  isValid: boolean;
  status: number;
}
