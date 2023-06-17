import Joi from 'joi';

// eslint-disable-next-line @typescript-eslint/naming-convention
// const _id = Joi.string().alphanum().length(24);
const name = Joi.string();
const address = Joi.string();
const email = Joi.string().email();
const latitude = Joi.number();
const longitude = Joi.number();
const workAreas = Joi.array().items(
  Joi.object({
    name: Joi.string(),
    x: Joi.number(),
    y: Joi.number(),
    height: Joi.number(),
    width: Joi.number()
  })
);
const isActive = Joi.boolean();
// const isActive = Joi.boolean();

const createHeadquarterDto = Joi.object({
  name: name.required(),
  address: address.required(),
  email: email.required(),
  latitude: latitude.required(),
  longitude: longitude.required(),
  workAreas: workAreas.required()
});

const updateHeadquarterDto = Joi.object({
  name,
  address,
  email,
  latitude,
  longitude,
  workAreas,
  isActive
});

export { createHeadquarterDto, updateHeadquarterDto };
