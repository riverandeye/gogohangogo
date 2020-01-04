export interface CreateParty {
  readonly servicename: string;

  readonly status: number;
  readonly title: string;
  readonly personnel: number;
  readonly capacity: number;
  readonly account: string;
  readonly authKey: string;
  readonly isAccountValid: boolean;
  readonly serviceId: number;
}
