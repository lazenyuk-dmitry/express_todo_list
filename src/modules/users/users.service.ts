import { comparePassword, hashPassword } from '@/utils/password';
import { User, IUser } from './users.model';
import { generateToken } from '@/utils/jwt';
import { ApiError } from '@/utils/errors';

export class UsersService {
  static async register(email: string, password: string, name?: string): Promise<IUser> {
    const existing = await User.findOne({ email });
    if (existing) {
      throw new ApiError('User already exists', 409);
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();

    return user;
  }

  static async login(email: string, password: string): Promise<{ user: IUser; token: string }> {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new ApiError('Invalid email or password', 401);
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new ApiError('Invalid email or password', 401);
    }

    const token = generateToken(user);

    return { user, token };
  }
}
