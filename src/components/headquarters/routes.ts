import express from 'express';

import { validatorHandler } from '../../middlewares/validator.handler';
import { createHeadquarterDto, updateHeadquarterDto } from './joiSchema';
import { createHeadquarter, getHeadquarters, updateHeadquarter } from './controller';

const headquarterRouter = express.Router();

headquarterRouter.post('/', validatorHandler(createHeadquarterDto, 'body'), createHeadquarter);

headquarterRouter.get('/', getHeadquarters);

headquarterRouter.put('/:id', validatorHandler(updateHeadquarterDto, 'body'), updateHeadquarter);

export { headquarterRouter };
