// import Boom from '@hapi/boom';

import {
  CreateNewHeadquarterModel,
  DistanceHeadquarterModel,
  HeadquarterModel,
  UpdateHeadquarterModel
} from './types';
import { save, get, update } from './store';

const saveHeadquarterService = (
  newHeadquarter: CreateNewHeadquarterModel
): Promise<HeadquarterModel> => {
  return save(newHeadquarter);
};

const getHeadquartersService = (): Promise<HeadquarterModel[]> => {
  return get();
};

const updateHeadquarterByIdService = async (
  id: string,
  headquarter: UpdateHeadquarterModel
): Promise<CreateNewHeadquarterModel | null> => {
  return await update(id, headquarter);
};

const distanceHeadquarterService = async (coords: DistanceHeadquarterModel) => {
  const headquarters = await getHeadquartersService();
  let min = 99999999999;
  let index = 0;
  headquarters.forEach((headq, i) => {
    const dist = Math.sqrt(
      (headq.latitude - coords.latitude) ** 2 + (headq.longitude - coords.longitude) ** 2
    );
    if (min > dist) {
      min = dist;
      index = i;
    }
  });
  return headquarters[index];
};

export {
  saveHeadquarterService,
  getHeadquartersService,
  updateHeadquarterByIdService,
  distanceHeadquarterService
};
