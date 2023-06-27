import express from 'express';

import { headquarterRouter } from './components/headquarters/routes';
import { employeeRouter } from './components/employee/routes';
import { bookRouter } from './components/books/routes';
import { authRouter } from './components/auth/routes';

const routers = express.Router();

routers.use('/headquarter', headquarterRouter);
routers.use('/employee', employeeRouter);
routers.use('/book', bookRouter);
routers.use('/auth', authRouter);

export { routers };
