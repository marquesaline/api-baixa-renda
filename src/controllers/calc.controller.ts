import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import moment from 'moment';

import Helper from '../utils/helper';
import CalcServices from '../services/calc.service';
import IncomeLimitServices from '../services/income_limit.service';

class CalcController {

    async low_income_calc(req: Request, res: Response) {
        
        let salaries = req.body.salaries;
        let calcDate = req.body.calcDate;
        let arrestDate = moment(req.body.arrestDate, 'DD/MM/YYYY').format('YYYY');

        let indexes = await CalcServices.getIndexesOfPeriodToCalc(calcDate);
       
        let accumulateIndexes = await CalcServices.accumulateIndexes(indexes, calcDate);

        let adjustedSalaries = await CalcServices.mometaryCorrectionOfSalaries(salaries, accumulateIndexes);

        let averageSalaries = await CalcServices.averageSalaries(adjustedSalaries);

        await IncomeLimitServices.checkIfLowIncome(averageSalaries, parseInt(arrestDate))
            .then(result => Helper.sendResponseCalc(
                res,
                StatusCodes.OK,
                parseInt(arrestDate),
                averageSalaries,
                result!.incomeLimit,
                result!.lowIncome
                
            )).catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
    }

}

export default new CalcController();