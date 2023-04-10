import express from 'express';

import { headquarterRouter } from './components/headquarters/routes';

const routers = express.Router();

routers.use('/headquarter', headquarterRouter);

export { routers };
