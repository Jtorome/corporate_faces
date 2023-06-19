import Boom from '@hapi/boom';

import { getEmployeesService } from '../employee/service';
import { generateToken } from '../../utils/auth/token';
import { SigninModel } from './types';
import { findByEmail } from './store';

const signinService = async (authData: SigninModel) => {
  const { email, password } = authData;

  const authUser = await findByEmail(email);
  if (!authUser) {
    throw Boom.unauthorized('Invalid email or password');
  }

  const validPassword = await authUser?.comparePasswords(password);
  if (!validPassword) {
    throw Boom.unauthorized('Invalid email or password');
  }

  const user = (await getEmployeesService({ email }))[0];

  return { token: generateToken({ idUser: user.id, email: user.email }) };
};

export { signinService };
