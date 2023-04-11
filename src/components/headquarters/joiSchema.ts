import Joi from 'joi';

// eslint-disable-next-line @typescript-eslint/naming-convention
// const _id = Joi.string().alphanum().length(24);
const name = Joi.string();
const address = Joi.string();
const email = Joi.string().email();
const isActive = Joi.boolean();
// const isActive = Joi.boolean();

const createHeadquarterDto = Joi.object({
  name: name.required(),
  address: address.required(),
  email: email.required()
});

const updateHeadquarterDto = Joi.object({
  name: name.required(),
  address: address.required(),
  email: email.required(),
  isActive: isActive.required()
});

export { createHeadquarterDto, updateHeadquarterDto };
