import { Request } from 'express';

type AuthUserModel = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: string;
  email: string;
  password: string;
};

type SigninModel = {
  email: string;
  password: string;
};

interface SigninRequest extends Request {
  body: SigninModel;
}

interface Payload {
  email: string;
  role: string;
}

export { SigninModel, SigninRequest, Payload, AuthUserModel };
