import { Request } from 'express';
import moment, { months } from 'moment';
import Helper from './helper';

class DatesValidator {

    async validateRequest(req: Request) {
        let validatorResult = {
            statusCode: 0,
            isThereError: false,
            error: ''
        }
        
    
        await this.validateNotUndefined(req.body).then(result => {
            
            if(result != undefined) {
                validatorResult.statusCode = 400,
                validatorResult.isThereError = true,
                validatorResult.error = result
                
                return validatorResult;
            } 
        });


        if(validatorResult.isThereError != true) {
            
            await this.validateArrestAndCalcDate(req.body).then(result => {
                if(result != undefined) {
                    validatorResult.statusCode = 400,
                    validatorResult.isThereError = true,
                    validatorResult.error = result
                   
                    return validatorResult;
                }
            });

        }
        if(validatorResult.isThereError != true) {
            
            await this.validateSalariesDate(req.body).then(result => {
                if(result != undefined) {
                    validatorResult.statusCode = 400,
                    validatorResult.isThereError = true,
                    validatorResult.error = result
                   
                    return validatorResult;
                }
            });
           
        }

        return validatorResult;
    }

    async validateNotUndefined(body: any) {

        if(!body.hasOwnProperty('calcDate')) {
            return 'A data do cálculo deve ser informada';
        } 
        if(!body.hasOwnProperty('arrestDate')){
            return 'A data da prisão deve ser informada';

        }
        if(!body.hasOwnProperty('salaries')){
            return 'Pelo menos um salário deve ser informado';
        }
    }


    async validateArrestAndCalcDate(body: any) {

        let calculationDate = moment(body.calcDate, 'DD/MM/YYYY');
        let prisonDate = moment(body.arrestDate, 'DD/MM/YYYY');

        if(moment(calculationDate).isBefore(prisonDate)) {
            return 'A data do cálculo deve ser igual ou posterior a data da prisão';
        }
    }

    async validateSalariesDate(body: any) {

        let salaries = body.salaries;
        let arrestDate = moment(body.arrestDate, 'DD/MM/YYYY');
        let result;

        salaries.forEach((salary: any) => {
            let date = `01/${salary.yearmonth}`
            let salaryDate = moment(date, 'DD/MM/YYYY');

            if(moment(salaryDate).isSameOrAfter(arrestDate, 'month')) {
                result = 'Todos os salários devem ser anteriores a data da prisão';
            }
        })

        return result;
    }
}

export default new DatesValidator();