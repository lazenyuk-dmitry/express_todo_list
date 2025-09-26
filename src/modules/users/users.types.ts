import { IUser } from './users.model';

export interface AuthUserData {
  user: IUser;
  token: string;
}

export type UserRegistrationData = Required<
  Pick<IUser, 'email' | 'name' | 'password'>
>;
export type UserLoginData = Required<Pick<IUser, 'email' | 'password'>>;
