import moment from 'moment';
import { Index } from '../database/models/index.model';
import IndexService from './index.service';

class CalcServices {

    async getIndexesOfPeriodToCalc(calcDate: string) {

        let indexes: (string | Index | undefined)[] = [];

        // calculo média dos últimos 12 salários não superiores a um período de 15 meses
        // cumulação o último salário multiplicado pelo anterior e assim sucessivamente

        let finalDate = moment(calcDate, 'DD/MM/YYYY').subtract(1, 'months').format('YYYYMM');
        let initialDate = moment(finalDate, 'YYYYMM').subtract(15, 'months').format('YYYYMM');
        let dateCounter: any = initialDate;

        while(moment(dateCounter, 'YYYYMM').isSameOrBefore(finalDate, 'month')) {

            await IndexService.getByYearMonth(parseInt(dateCounter)).then(async result => {
                indexes.push(result);
            });
          
            dateCounter = moment(dateCounter, 'YYYYMM').add(1,'months').format('YYYYMM');
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

        console.log(accumulateIndexes);

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
                    let objIndex: any = {
                        yearmonth: indexes[i].yearmonth,
                        index: previousIndex * parseFloat(indexes[i].contributionSalariesCorrection)
                    };

                    return objIndex;
                }
            }
        }
    }
}   

export default new CalcServices();