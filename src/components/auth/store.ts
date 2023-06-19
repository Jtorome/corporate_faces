import { SigninModel } from './types';
import { authSchema } from './model';

const saveAuthUser = async (signUpData: SigninModel) => {
  await authSchema.create(signUpData);
};

const findByEmail = async (email: SigninModel['email']) => {
  const authUserFound = await authSchema.findOne({ email });
  return authUserFound;
};

export { saveAuthUser, findByEmail };
