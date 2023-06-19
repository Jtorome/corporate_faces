import express from 'express';

import { validatorHandler } from '../../middlewares/validator.handler';
import { signinDto } from './joiSchema';
import { signin, signup } from './controller';

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/', validatorHandler(signinDto, 'body'), signin);

export { authRouter };
