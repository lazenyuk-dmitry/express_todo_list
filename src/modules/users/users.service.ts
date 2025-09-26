import { comparePassword, hashPassword } from '@/utils/password';
import { User, IUser } from './users.model';
import { generateToken } from '@/utils/jwt';
import { ApiError } from '@/utils/errors';
import { UserRegistrationData } from './users.types';

export class UsersService {
  static async register(
    data: UserRegistrationData,
  ): Promise<{ user: IUser; token: string }> {
    const { email, password, name } = data;
    const existing = await User.findOne({ email });
    if (existing) {
      throw new ApiError('User already exists', 409);
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();
    const token = generateToken(user);

    return { user, token };
  }

  static async login(
    email: string,
    password: string,
  ): Promise<{ user: IUser; token: string }> {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new ApiError('Invalid email or password', 401);
    }

    const isMatch = await comparePassword(password, user.password!);
    if (!isMatch) {
      throw new ApiError('Invalid email or password', 401);
    }

    const token = generateToken(user);

    return { user, token };
  }
}
