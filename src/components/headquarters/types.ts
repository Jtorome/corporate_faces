import { Request } from 'express';
import { ObjectId } from 'mongoose';

type HeadquarterModel = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  id?: ObjectId;
  name: string;
  address: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type CreateNewHeadquarterModel = Omit<
  HeadquarterModel,
  'id' | 'isActive' | 'createdAt' | 'updatedAt'
>;

type UpdateHeadquarterModel = Omit<HeadquarterModel, 'id' | 'createdAt' | 'updatedAt'>;

interface CreateNewHeadquarterInter extends Request {
  body: CreateNewHeadquarterModel;
}

interface UpdateHeadquarterInter extends Request {
  body: UpdateHeadquarterModel;
}

export {
  HeadquarterModel,
  CreateNewHeadquarterModel,
  CreateNewHeadquarterInter,
  UpdateHeadquarterInter,
  UpdateHeadquarterModel
};
