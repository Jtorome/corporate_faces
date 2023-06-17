import { find, save } from './store';
import { CreateNewEmployeeModel, EmployeeModel, FilterEmployeesModel } from './types';

const saveEmployeeService = async (
  newEmployee: CreateNewEmployeeModel
): Promise<CreateNewEmployeeModel> => {
  return save(newEmployee);
};

const getEmployeesService = async (filter: FilterEmployeesModel): Promise<EmployeeModel[]> => {
  const foundEmployees = await find(filter);
  return foundEmployees;
};

export { saveEmployeeService, getEmployeesService };
