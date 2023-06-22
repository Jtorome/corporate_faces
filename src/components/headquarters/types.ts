import { Request } from 'express';
import { ObjectId } from 'mongoose';

type HeadquarterModel = {
  id?: ObjectId;
  name: string;
  address: string;
  email: string;
  latitude: number;
  longitude: number;
  workAreas: {
    name: string;
    x: number;
    y: number;
    height: number;
    width: number;
  }[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type CreateNewHeadquarterModel = Omit<
  HeadquarterModel,
  'id' | 'isActive' | 'createdAt' | 'updatedAt'
>;

type UpdateHeadquarterModel = Omit<HeadquarterModel, 'id' | 'createdAt' | 'updatedAt'>;

type DistanceHeadquarterModel = Pick<HeadquarterModel, 'longitude' | 'latitude'>;

interface CreateNewHeadquarterInter extends Request {
  body: CreateNewHeadquarterModel;
}

interface UpdateHeadquarterInter extends Request {
  body: UpdateHeadquarterModel;
}

interface DistanceHeadquarterRequest extends Request {
  body: DistanceHeadquarterModel;
}

export {
  HeadquarterModel,
  CreateNewHeadquarterModel,
  CreateNewHeadquarterInter,
  UpdateHeadquarterInter,
  UpdateHeadquarterModel,
  DistanceHeadquarterRequest,
  DistanceHeadquarterModel
};
