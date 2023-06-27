import Joi from 'joi';

const email = Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
const password = Joi.string();

const signinDto = Joi.object({
  email: email.required(),
  password: password.required()
});

export { signinDto };
