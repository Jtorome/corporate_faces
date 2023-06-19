import mongoose, { Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IAuthModel {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IAuthMethods {
  comparePasswords(password: string): Promise<boolean>;
}

type AuthModel = Model<IAuthModel, object, IAuthMethods>;

const schema = new Schema<IAuthModel, AuthModel, IAuthMethods>(
  {
    email: {
      type: String,
      required: true,
      ref: 'Employee',
      unique: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

//Devuelve un TRUE O FALSE dependiendo de si las contraseñas coinciden o no
schema.methods.comparePasswords = function (password) {
  return bcrypt.compare(password, this.password);
};

//Encriptar contraseña
schema.pre('save', async function (next) {
  const salt = bcrypt.genSaltSync();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const authSchema = mongoose.model('Auth', schema);

export { authSchema, AuthModel };
