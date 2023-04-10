// import Boom from '@hapi/boom';

import { CreateNewHeadquarterModel, HeadquarterModel } from './types';
import { save } from './store';

const saveHeadquarterService = (
  newHeadquarter: CreateNewHeadquarterModel
): Promise<HeadquarterModel> => {
  return save(newHeadquarter);
};

export { saveHeadquarterService };
