import express from 'express';
import { validatorHandler } from '../../middlewares/validator.handler';
import { createEmployeeDto, filterEmployeesDto } from './joiSchema';
import { createEmployee, getEmployees } from './controller';

const employeeRouter = express.Router();

employeeRouter.post('/', validatorHandler(createEmployeeDto, 'body'), createEmployee);
employeeRouter.get('/', validatorHandler(filterEmployeesDto, 'query'), getEmployees);

export { employeeRouter };
