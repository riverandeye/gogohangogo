export interface UpdatedUser {
  readonly name?: string;
  readonly introduction?: string;
  readonly email?: string;
  readonly password?: string;
  readonly avatar?: string;
  readonly agreeAlarm?: boolean;
  readonly alarmSubscription?: object;
  readonly priority?: number;
  readonly isValid?: boolean;
  readonly status?: number;
}

export interface CreatedUser {
  readonly name: string;
  readonly introduction: string;
  readonly email: string;
  readonly authKey: string;
  readonly avatar: string;
  readonly alarmSubscription: object;
  readonly status: number;
  readonly agreeAlarm: boolean;
  password: string;
}
