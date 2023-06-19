import { NextFunction, Request, Response } from 'express';
import { success } from '../../utils/response';
import { getBooksService } from './service';

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const foundBooks = await getBooksService();
    success(res, 200, 'Ok', foundBooks);
  } catch (error) {
    next(error);
  }
};

export { getBooks };
