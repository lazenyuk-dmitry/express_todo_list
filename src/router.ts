import { Router } from 'express';

const router = Router();

// /api/v1/
router.get('/', (req, res) => {
  res.json({ message: 'API V1 🚀' });
});

export default router;
