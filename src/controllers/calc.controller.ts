import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import moment from 'moment';

import Helper from '../utils/helper';
import CalcServices from '../services/calc.service';

class CalcController {

    async low_income_calc(req: Request, res: Response) {
        let salarys = req.body.salarys;;
        let calcDate = req.body.calcDate;;

        let indexes = await CalcServices.getIndexesOfPeriodToCalc(calcDate);
       
        let accumulateIndexes = await CalcServices.accumulateIndexes(indexes, calcDate);
    }

}

export default new CalcController();