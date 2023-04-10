import { NextFunction, Request, Response } from 'express';
import Boom from '@hapi/boom';
import { failure } from '../utils/response';

const logErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
  //TODO: redireccionar a la pagina para atrapar errores
  console.error(error);
  next(error);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  failure(res, 500, error.message, error.stack);
};

const boomErrorHandler = (error: Boom.Boom, req: Request, res: Response, next: NextFunction) => {
  if (error.isBoom) {
    const { output } = error;
    return failure(res, output.statusCode, output.payload.message, undefined);
  }
  next(error);
};

export { errorHandler, logErrors, boomErrorHandler };
