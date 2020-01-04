export interface User {
  readonly id: number;
  readonly authKey: string;
  password: string;
  name: string;
  email: string;
  avatar: string;
  agreeAlarm: boolean;
  alarmSubscription: object;
  priority: number;
  isValid: boolean;
}

export interface UpdatedUser {
  readonly name?: string;
  readonly email?: string;
  readonly password?: string;
  readonly avatar?: string;
  readonly agreeAlarm?: boolean;
  readonly alarmSubscription?: object;
  readonly priority?: number;
  readonly isValid?: boolean;
}

export interface CreatedUser {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly authKey: string;
  readonly avatar: string;
  readonly alarmSubscription: object;
  readonly agreeAlarm: boolean;
}
