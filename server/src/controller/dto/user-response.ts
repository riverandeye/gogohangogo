import { User } from '../../common/interface/user';

export class UserResponseDTO {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar;
    this.introduction = user.introduction;
    this.priority = user.priority;
    this.isValid = user.isValid;
    this.status = user.status;
    this.isDeposited = user.isDeposited;
  }

  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly avatar: string;
  public readonly introduction: string;
  public readonly priority: number;
  public readonly isValid: boolean;
  public readonly status: boolean;
  public readonly isDeposited: boolean;
}
