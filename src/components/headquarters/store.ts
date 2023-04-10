import { headquarterSchema } from './model';
import { CreateNewHeadquarterModel, HeadquarterModel } from './types';

const save = async (headquarter: CreateNewHeadquarterModel): Promise<HeadquarterModel> => {
  const newHeadquarter = new headquarterSchema(headquarter);
  await newHeadquarter.save();
  return newHeadquarter;
};

const get = async (): Promise<CreateNewHeadquarterModel[]> => {
  return await headquarterSchema.find();
};

export { save, get };
