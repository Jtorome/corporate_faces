import { headquarterSchema } from './model';
import { CreateNewHeadquarterModel, HeadquarterModel, UpdateHeadquarterModel } from './types';

const save = async (headquarter: CreateNewHeadquarterModel): Promise<HeadquarterModel> => {
  const newHeadquarter = new headquarterSchema(headquarter);
  await newHeadquarter.save();
  return newHeadquarter;
};

const get = async (): Promise<HeadquarterModel[]> => {
  return await headquarterSchema.find();
};

const update = async (
  id: string,
  headquarter: UpdateHeadquarterModel
): Promise<CreateNewHeadquarterModel | null> => {
  const headquarterUpdated = await headquarterSchema.findByIdAndUpdate(id, headquarter);
  return headquarterUpdated;
};

export { save, get, update };
