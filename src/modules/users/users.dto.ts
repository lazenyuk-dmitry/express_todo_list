import { IUser } from './users.model';

export type UserResponseDTO = Omit<IUser, 'password'>;

export interface AuthResponseDTO {
  user: UserResponseDTO;
  token: string;
}
