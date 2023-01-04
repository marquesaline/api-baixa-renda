import { Response } from 'express';
import moment from 'moment';
import Helper from './helper';

class Validator {

    async validateRequest(reqBody: any) {
        let validatorResult = {
            statusCode: 0,
            isThereError: false,
            error: ''
        }
    
        await this.validateNotUndefined(reqBody).then(result => {
                if(result != undefined) {
                    validatorResult.statusCode = 400,
                    validatorResult.isThereError = true,
                    validatorResult.error = result
                   
                    return validatorResult;
                }
        });

        return validatorResult;
      
    }

    async validateNotUndefined(reqBody: any) {

        if(!reqBody.hasOwnProperty('calcDate')) {
            return 'A data do cálculo deve ser informada';
        } 
        if(!reqBody.hasOwnProperty('arrestDate')){
            return 'A data da prisão deve ser informada';

        }
        if(!reqBody.hasOwnProperty('salaries')){
            return 'Pelo menos um salário deve ser informado';
        }
    }


    async validateDates(calcDate: string, arrestDate: string) {

        let calculationDate = moment(calcDate, 'DD/MM/YYYY');
        let prisonDate = moment(arrestDate, 'DD/MM/YYYY');

        if(moment(calculationDate).isBefore(prisonDate)) {
            return 
        }
    }
}

export default new Validator();