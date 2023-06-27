import { bookSchema } from './model';

const find = async () => {
  return await bookSchema.find();
};

export { find };
