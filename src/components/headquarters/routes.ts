import express from 'express';

import {
  createHeadquarter,
  distanceHeadquarter,
  getAllWorkAreas,
  getHeadquarters,
  updateHeadquarter
} from './controller';
import { createHeadquarterDto, distanceHeadquarterDto, updateHeadquarterDto } from './joiSchema';
import { validatorHandler } from '../../middlewares/validator.handler';

const headquarterRouter = express.Router();

headquarterRouter.post('/', validatorHandler(createHeadquarterDto, 'body'), createHeadquarter);

headquarterRouter.post(
  '/distance',
  validatorHandler(distanceHeadquarterDto, 'body'),
  distanceHeadquarter
);

headquarterRouter.get('/', getHeadquarters);

headquarterRouter.get('/workAreas', getAllWorkAreas);

headquarterRouter.put('/:id', validatorHandler(updateHeadquarterDto, 'body'), updateHeadquarter);

export { headquarterRouter };
