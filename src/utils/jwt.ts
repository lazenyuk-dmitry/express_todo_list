import { IUser } from '@/modules/users/users.model';
import jwt, { type SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? 'super-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '1h';

export const generateToken = (user: IUser) => {
  const { id, email, createdAt } = user;
  const token = jwt.sign(
    { id, email, createdAt },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN } as SignOptions
  );

  return token;
}
