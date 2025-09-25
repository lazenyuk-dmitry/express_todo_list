import { Request, Response } from 'express';
import { UsersService } from './users.service';

export class UsersController {
  static async register(req: Request, res: Response) {
    const { email, password, name } = req.body;
    const user = await UsersService.register(email, password, name);
    res.status(201).json({ message: 'User created', user });

  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { user, token } = await UsersService.login(email, password);
    res.status(200).json({ message: 'Login successful', user, token });
  }
}
