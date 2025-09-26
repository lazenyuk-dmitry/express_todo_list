import { Router } from 'express';
import usersRouter from '@/modules/users/users.router';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'API V1 🚀' });
});

router.use('/users', usersRouter);

export default router;
