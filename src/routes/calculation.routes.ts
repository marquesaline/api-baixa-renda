import { Router } from 'express';
import CalcController from '../controllers/calculation.controller';

const calculationRouter = Router();

calculationRouter.post('/', CalcController.low_income_calc);



export default calculationRouter;