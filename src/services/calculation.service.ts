import moment from 'moment';

import { Index } from '../database/models/index.model';
import { IAccumulateIndex } from '../interfaces/index.interface';
import { ISalary } from '../interfaces/salary.interface';
import IndexService from './index.service';

class CalculationServices {

    async getIndexesOfPeriodToCalc(calcDate: string) {

        let indexes: (string | Index | undefined)[] = [];
        let finalDate = moment(calcDate, 'DD/MM/YYYY').subtract(1, 'months').format('YYYYMM');
        let initialDate = moment(finalDate, 'YYYYMM').subtract(15, 'months').format('YYYYMM');
        

        while(moment(initialDate, 'YYYYMM').isSameOrBefore(finalDate, 'month')) {

            await IndexService.getByYearMonth(parseInt(initialDate)).then(async result => {
                indexes.push(result);
            });
          
            initialDate = moment(initialDate, 'YYYYMM').add(1,'months').format('YYYYMM');
        }

        return indexes;
    }

    async accumulateIndexes(indexes: any[], calcDate: string) {

        let dateCounter = moment(calcDate, 'DD/MM/YYYY').subtract(1, 'months').format('YYYYMM');
        let dateLimit = moment(dateCounter, 'YYYYMM').subtract(15, 'months').format('YYYYMM');
        let accumulateIndexes: any[] = [];

        while(moment(dateCounter, 'YYYYMM').isSameOrAfter(dateLimit, 'month')) {

            await this.accumulationHelper(dateCounter, indexes, accumulateIndexes).then(result => {
                accumulateIndexes.push(result);
            });
            dateCounter = moment(dateCounter, 'YYYYMM').subtract(1,'months').format('YYYYMM');
        }
        return accumulateIndexes;
    }

    async accumulationHelper(dateCounter: string, indexes: any[], accumulateIndexes: any[]) {

        for(let i = 0; i < indexes.length; i++) {

            if(indexes[i].yearmonth == parseInt(dateCounter)) {

                if(accumulateIndexes.length === 0) {

                    let objIndex = {
                        yearmonth: indexes[i].yearmonth,
                        index: parseFloat(indexes[i].contributionSalariesCorrection)
                    };
                    return objIndex;

                } else {

                    let previousIndex = accumulateIndexes[accumulateIndexes.length - 1].index;
                    let index = (previousIndex * parseFloat(indexes[i].contributionSalariesCorrection)).toFixed(4)
                    let objIndex: any = {
                        yearmonth: indexes[i].yearmonth,
                        index: parseFloat(index)
                    };
                    return objIndex;
                }
            }
        }
    }

    async mometaryCorrectionOfSalaries(salaries: Array<ISalary>, accumulateIndexes: Array<IAccumulateIndex>) {

        let adjustedSalaries = [];

        for(let i = 0; i < salaries.length; i++) {
            let salary = await this.monetaryHelper(salaries[i], accumulateIndexes);
            adjustedSalaries.push(salary);
        }
        return adjustedSalaries;
    }

    async monetaryHelper(salary: ISalary, accumulateIndexes: Array<IAccumulateIndex>) {
        let yearMonthSalary = parseInt(moment(salary.yearmonth, 'MM/YYYY').format('YYYYMM'));

        for(let i = 0; i < accumulateIndexes.length; i++) {

            if(accumulateIndexes[i].yearmonth == yearMonthSalary) {

                let salaryAdjusted = (accumulateIndexes[i].index * salary.salary).toFixed(2);
                let objResult = {
                    yearmonth: salary.yearmonth,
                    adjustedSalary: parseFloat(salaryAdjusted)
                }
                return objResult;
            }
        }
    }

    async averageSalaries(adjustedSalaries: Array<any>) {
        let sumSalaries = 0;
        let counter = 0;

        for(let i = 0; i < adjustedSalaries.length; i++) {
            sumSalaries += parseFloat(adjustedSalaries[i].adjustedSalary);
            counter++;
        }
        let average = parseFloat((sumSalaries / counter).toFixed(2));
        return average;
    }
}   
export default new CalculationServices();