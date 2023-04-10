import { NextFunction, Response } from 'express';
import { success } from '../../utils/response';

import { saveHeadquarterService } from './service';
import { CreateNewHeadquarterInter } from './types';

/**
 * @returns Headquarter created
 */
const createHeadquarter = async (
  req: CreateNewHeadquarterInter,
  res: Response,
  next: NextFunction
) => {
  try {
    const newHeadquarter = await saveHeadquarterService(req.body);
    success(res, 201, 'created', newHeadquarter);
  } catch (error) {
    next(error);
  }
};

export { createHeadquarter };
