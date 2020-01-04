interface UserResponseDTO {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly avatar: string;
  readonly description: string;
  readonly priority: number;
  readonly isValid: boolean;
  readonly status: boolean;
}
