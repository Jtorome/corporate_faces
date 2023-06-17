import express from 'express';

import { createHeadquarter, getHeadquarters, updateHeadquarter } from './controller';
import { createHeadquarterDto, updateHeadquarterDto } from './joiSchema';
import { validatorHandler } from '../../middlewares/validator.handler';

const headquarterRouter = express.Router();

headquarterRouter.post('/', validatorHandler(createHeadquarterDto, 'body'), createHeadquarter);

headquarterRouter.get('/', getHeadquarters);

headquarterRouter.put('/:id', validatorHandler(updateHeadquarterDto, 'body'), updateHeadquarter);

export { headquarterRouter };
