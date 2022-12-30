import { IncomeLimit } from '../database/models/income_limit.model';


class IncomeLimitServices {

    async getIncomeLimitByYear(year: number) {
        try {
            const incomeLimit = await IncomeLimit.findOne({
                where: { year: year }
            });

            if(!incomeLimit) {
                return 'Income limit not found';
            }
            return incomeLimit.income_limit;
        } catch (error) {
            console.log(error);
        }
    }

    async checkIfLowIncome(average: number, year: number) {

        let incomeLimit = await this.getIncomeLimitByYear(year);

        if(incomeLimit != undefined) {

            if(parseFloat(incomeLimit) >= average) {
                return {
                    incomeLimit: incomeLimit,
                    lowIncome: true,
                };
            } else {
                return {
                    incomeLimit: incomeLimit,
                    lowIncome: false
                }
            }
        }
    }
}

export default new IncomeLimitServices();