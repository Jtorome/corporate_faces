import { NextFunction, Request, Response } from 'express';

import { success } from '../../utils/response';
import { signinService } from './service';
import { SigninRequest } from './types';
import { saveAuthUser } from './store';

const signin = async (req: SigninRequest, res: Response, next: NextFunction) => {
  try {
    const token = await signinService(req.body);
    success(res, 200, 'Ok', token);
  } catch (error) {
    next(error);
  }
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await saveAuthUser(req.body);
    success(res, 201, 'Ok', undefined);
  } catch (error) {
    next(error);
  }
};

export { signin, signup };
