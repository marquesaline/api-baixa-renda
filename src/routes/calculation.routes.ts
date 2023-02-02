import { Router } from 'express';
import CalcController from '../controllers/calculation.controller';

const calculationRouter = Router();

calculationRouter.post('/', CalcController.low_income_calc);
calculationRouter.get('/', CalcController.test)



export default calculationRouter;