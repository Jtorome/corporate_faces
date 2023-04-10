import express from 'express';

import { validatorHandler } from '../../middlewares/validator.handler';
import { createHeadquarterDto } from './joiSchema';
import { createHeadquarter } from './controller';

const headquarterRouter = express.Router();

headquarterRouter.post('/', validatorHandler(createHeadquarterDto, 'body'), createHeadquarter);

export { headquarterRouter };
