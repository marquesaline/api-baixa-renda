import { Router } from 'express';
import CalcController from '../controllers/calc.controller';

const calcRouter = Router();

calcRouter.post('/', CalcController.low_income_calc);


export default calcRouter;