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

const findAllWorkAreas = async () => {
  const workAreasFound = await headquarterSchema.aggregate([
    { $unwind: { path: '$workAreas' } },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    { $group: { _id: '$workAreas.name' } }
  ]);

  return workAreasFound;
};

export { save, get, update, findAllWorkAreas };
