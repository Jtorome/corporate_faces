import express from 'express';

import { headquarterRouter } from './components/headquarters/routes';
import { employeeRouter } from './components/employee/routes';

const routers = express.Router();

routers.use('/headquarter', headquarterRouter);
routers.use('/employee', employeeRouter);

export { routers };
