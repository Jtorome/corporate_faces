// import Boom from '@hapi/boom';

import { CreateNewHeadquarterModel, HeadquarterModel, UpdateHeadquarterModel } from './types';
import { save, get, update } from './store';

const saveHeadquarterService = (
  newHeadquarter: CreateNewHeadquarterModel
): Promise<HeadquarterModel> => {
  return save(newHeadquarter);
};

const getHeadquartersService = (): Promise<CreateNewHeadquarterModel[]> => {
  return get();
};

const updateHeadquarterByIdService = async (
  id: string,
  headquarter: UpdateHeadquarterModel
): Promise<CreateNewHeadquarterModel | null> => {
  return await update(id, headquarter);
};

export { saveHeadquarterService, getHeadquartersService, updateHeadquarterByIdService };
