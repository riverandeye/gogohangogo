export interface CreatedParty {
  readonly servicename: string;

  readonly status: number;
  readonly title: string;
  readonly personnel: number;
  readonly capacity: number;
  readonly introduction: string;
  readonly account: string;
  readonly authKey: string;
  readonly adminUserId: number;
  readonly isAccountValid: boolean;
  readonly serviceId: number;
}

export interface UpdatedParty {
  readonly servicename?: string;
  readonly status?: number;
  readonly title?: string;
  readonly personnel?: number;
  readonly capacity?: number;
  readonly introduction?: string;
  readonly account?: string;
  readonly authKey?: string;
  readonly adminUserId?: number;
  readonly isAccountValid?: boolean;
  readonly serviceId?: number;
}
