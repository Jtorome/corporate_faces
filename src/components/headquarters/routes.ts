import express from 'express';

import { validatorHandler } from '../../middlewares/validator.handler';
import { createHeadquarterDto } from './joiSchema';
import { createHeadquarter, getHeadquarters } from './controller';

const headquarterRouter = express.Router();

headquarterRouter.post('/', validatorHandler(createHeadquarterDto, 'body'), createHeadquarter);

headquarterRouter.get('/', getHeadquarters);

export { headquarterRouter };
