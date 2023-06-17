import { NextFunction, Response } from 'express';

import { CreateNewEmployeeRequest, FilterEmployeesRequest } from './types';
import { success } from '../../utils/response';
import { getEmployeesService, saveEmployeeService } from './service';

const createEmployee = async (req: CreateNewEmployeeRequest, res: Response, next: NextFunction) => {
  try {
    const newEmployee = await saveEmployeeService(req.body);
    success(res, 201, 'created', newEmployee);
  } catch (error) {
    next(error);
  }
};

const getEmployees = async (req: FilterEmployeesRequest, res: Response, next: NextFunction) => {
  try {
    const foundEmployees = await getEmployeesService(req.query);
    success(res, 200, 'Ok', foundEmployees);
  } catch (error) {
    next(error);
  }
};

export { createEmployee, getEmployees };
