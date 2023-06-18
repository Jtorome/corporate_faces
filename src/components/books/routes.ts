import express from 'express';
import { getBooks } from './controller';

const bookRouter = express.Router();

bookRouter.get('/', getBooks);

export { bookRouter };
