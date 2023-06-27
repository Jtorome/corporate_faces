import { employeeSchema } from './model';
import { CreateNewEmployeeModel, EmployeeModel, FilterEmployeesModel } from './types';

const save = async (newEmployee: CreateNewEmployeeModel): Promise<CreateNewEmployeeModel> => {
  await employeeSchema.create(newEmployee);
  return newEmployee;
};

const find = async (filter: FilterEmployeesModel): Promise<EmployeeModel[]> => {
  let match: object;
  const skills = filter.skills;
  const skill = filter.skill;
  delete filter.skill;
  delete filter.skills;
  if (skills || skill) {
    match = {
      ...filter,
      skills: { $in: skills ? skills : [skill] }
    };
  } else {
    match = { ...filter };
  }
  if (filter.name) {
    match = { ...match, name: { $regex: filter.name, $options: 'i' } };
  }
  if (filter.position) {
    match = { ...match, position: { $regex: filter.position, $options: 'i' } };
  }
  if (filter.workArea) {
    match = { ...match, workArea: { $regex: filter.workArea, $options: 'i' } };
  }

  return await employeeSchema
    .find<EmployeeModel>(match)
    .populate({ path: 'headquarter', select: 'name latitude longitude' });
};

export { save, find };
