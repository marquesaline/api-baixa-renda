import { Router } from 'express';
import IndexController from '../controllers/index.controller';

const indexRouter = Router();


indexRouter.get('/indexes', IndexController.getAll);

indexRouter.get('/indexes/:id', IndexController.getById);

indexRouter.get('/index/:yearmonth', IndexController.getByYearMonth);

indexRouter.post('/indexes', IndexController.create);

indexRouter.put('/indexes/:id', IndexController.update);

indexRouter.delete('/indexes/:id', IndexController.delete);

export default indexRouter;