import { Response } from 'express';

class Helper {

    sendResponse = (res: Response, statusCode: number, data?: any, message?: string) => {
        res
            .status(statusCode)
            .json({
                message: message,
                result: data
            });
    }

    sendResponseCalc = (res: Response, statusCode: number, arrestYear: number, average: any, incomeLimit: string, lowIncome: boolean) => {
        res
           .status(statusCode)
           .json({
               media_salarios: average,
               ano_prisao: arrestYear,
               valor_limite: incomeLimit,
               baixa_renda: lowIncome
           });
    }
}

export default new Helper();