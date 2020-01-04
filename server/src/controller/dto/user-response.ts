import { User } from '../../common/interface/user';

export class UserResponseDTO {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar;
    this.description = user.description;
    this.priority = user.priority;
    this.isValid = user.isValid;
    this.status = user.status;
  }

  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly avatar: string;
  public readonly description: string;
  public readonly priority: number;
  public readonly isValid: boolean;
  public readonly status: boolean;
}
