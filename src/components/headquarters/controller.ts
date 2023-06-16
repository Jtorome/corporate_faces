import { NextFunction, Response, Request } from 'express';
import { success } from '../../utils/response';

import {
  saveHeadquarterService,
  getHeadquartersService,
  updateHeadquarterByIdService
} from './service';
import { CreateNewHeadquarterInter, UpdateHeadquarterInter } from './types';

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

const getHeadquarters = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const headquarters = await getHeadquartersService();
    res.send(headquarters);
  } catch (error) {
    next(error);
  }
};

const updateHeadquarter = async (
  req: UpdateHeadquarterInter,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedHeadquarter = await updateHeadquarterByIdService(req.params.id, req.body);
    res.send(updatedHeadquarter);
  } catch (error) {
    next(error);
  }
};

export { createHeadquarter, getHeadquarters, updateHeadquarter };
