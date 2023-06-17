import Joi from 'joi';

// const id = Joi.string().alphanum().length(24);
const name = Joi.string();
const email = Joi.string();
const telephone = Joi.string();
const position = Joi.string();
const workArea = Joi.string();
const headquarter = Joi.string().alphanum().length(24);
const skills = Joi.array().items(Joi.string());
const skill = Joi.string();
// const isActive = Joi.boolean();

const createEmployeeDto = Joi.object({
  name: name.required(),
  email: email.required(),
  telephone: telephone.required(),
  position: position.required(),
  workArea: workArea.required(),
  headquarter: headquarter.required(),
  skills: skills.required()
});

const filterEmployeesDto = Joi.object({
  name,
  email,
  position,
  workArea,
  headquarter,
  skills,
  skill
}).min(1);

export { createEmployeeDto, filterEmployeesDto };
