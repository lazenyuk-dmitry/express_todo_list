import { Request, Response } from 'express';
import { UsersService } from './users.service';
import { AuthResponseDTO } from './users.dto';
import { ResponseDTO } from '@/types/DTO/response.dto';
import { UserLoginData, UserRegistrationData } from './users.types';

export class UsersController {
  static async register(
    req: Request<UserRegistrationData>,
    res: Response<ResponseDTO<AuthResponseDTO>>,
  ) {
    const { email, password, name } = req.body;
    const { user, token } = await UsersService.register({
      email,
      password,
      name,
    });
    res.status(201).json({
      status: 201,
      message: 'User created',
      data: {
        user,
        token,
      },
    });
  }

  static async login(
    req: Request<{}, {}, UserLoginData>,
    res: Response<ResponseDTO<AuthResponseDTO>>,
  ) {
    const { email, password } = req.body;
    const { user, token } = await UsersService.login(email, password);
    res.status(200).json({
      status: 200,
      message: 'Login successful',
      data: {
        user,
        token,
      },
    });
  }
}
