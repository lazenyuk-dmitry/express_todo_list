import { IUser } from './users.model';

export type UserDTO = Omit<IUser, 'password'>;
