export class MyPartyUser {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly introduction: string,
    public readonly email: string,
    public readonly avatar: string,
    public readonly priority: number,
    public readonly isValid: boolean,
    public readonly status: number,
  ) {}
}
