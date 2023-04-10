import { headquarterSchema } from './model';
import { CreateNewHeadquarterModel, HeadquarterModel } from './types';

const save = async (headquarter: CreateNewHeadquarterModel): Promise<HeadquarterModel> => {
  const newHeadquarter = new headquarterSchema(headquarter);
  await newHeadquarter.save();
  return newHeadquarter;
};

export { save };
