import { Request } from 'express';

type EmployeeModel = {
  id?: string;
  name: string;
  email: string;
  telephone: string;
  position: string;
  photo: string;
  workArea: string;
  headquarter: string;
  skills: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type CreateNewEmployeeModel = Omit<EmployeeModel, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>;

interface CreateNewEmployeeRequest extends Request {
  body: CreateNewEmployeeModel;
}

type FilterEmployeesModel = Partial<Omit<CreateNewEmployeeModel, 'telephone' | 'photo'>> & {
  skill?: string;
};

interface FilterEmployeesRequest extends Request {
  query: FilterEmployeesModel;
}

export {
  EmployeeModel,
  CreateNewEmployeeModel,
  CreateNewEmployeeRequest,
  FilterEmployeesModel,
  FilterEmployeesRequest
};
