// import Boom from '@hapi/boom';

import { CreateNewHeadquarterModel, HeadquarterModel } from './types';
import { save, get } from './store';

const saveHeadquarterService = (
  newHeadquarter: CreateNewHeadquarterModel
): Promise<HeadquarterModel> => {
  return save(newHeadquarter);
};

const getHeadquartersService = (): Promise<CreateNewHeadquarterModel[]> => {
  return get();
};

export { saveHeadquarterService, getHeadquartersService };
