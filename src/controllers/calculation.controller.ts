import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import moment from 'moment';

import Helper from '../utils/helper';
import Validator from '../utils/validator';
import CalculationServices from '../services/calculation.service';
import IncomeLimitServices from '../services/income_limit.service';

class CalcController {

    async low_income_calc(req: Request, res: Response) {

        await Validator.validateRequest(req.body).then(async result => {

            if(result.isThereError == true) {

                return Helper.sendResponseError(
                    res,
                    result.statusCode,
                    result.isThereError,
                    result.error
                )
                
            } else {

                let salaries = req.body.salaries;
                let calcDate = req.body.calcDate;
                let arrestDate = moment(req.body.arrestDate, 'DD/MM/YYYY').format('YYYY');

                let indexes = await CalculationServices.getIndexesOfPeriodToCalc(calcDate);
            
                let accumulateIndexes = await CalculationServices.accumulateIndexes(indexes, calcDate);

                let adjustedSalaries = await CalculationServices.mometaryCorrectionOfSalaries(salaries, accumulateIndexes);

                let averageSalaries = await CalculationServices.averageSalaries(adjustedSalaries);

                await IncomeLimitServices.checkIfLowIncome(averageSalaries, parseInt(arrestDate)).then(result => Helper.sendResponseCalc(
                    res,
                    StatusCodes.OK,
                    parseInt(arrestDate),
                    averageSalaries,
                    result!.incomeLimit,
                    result!.lowIncome
                        
                )).catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
            }
                
        });
        
    }

}

export default new CalcController();