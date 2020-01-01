export interface User {
  readonly id: number;
  name: string;
  email: string;
  avatar: string;
  agreeAlarm: boolean;
  priority: number;
  isValid: boolean;
}

export interface UpdatedUser {
  readonly name?: string;
  readonly email?: string;
  readonly avatar?: string;
  readonly agreeAlarm?: boolean;
  readonly priority?: number;
  readonly isValid?: boolean;
}

export interface CreatedUser {
  readonly name: string;
  readonly email: string;
  readonly avatar: string;
  readonly agreeAlarm: boolean;
}
