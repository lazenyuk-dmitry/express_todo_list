import { ApiError } from '@/utils/errors';
import type { NextFunction, Request, Response } from 'express';

export const serverErrorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode || 500).json({
      status: err.statusCode || 500,
      message: err.message || 'Internal Server Error',
    });
  }

  next(err);
};
