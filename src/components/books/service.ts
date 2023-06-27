import { find } from './store';

const getBooksService = async () => {
  const foundBooks = await find();
  return foundBooks;
};

export { getBooksService };
