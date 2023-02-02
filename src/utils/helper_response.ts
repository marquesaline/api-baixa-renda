import { Response } from 'express';

class HelperResponse {

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

    sendResponseError = (res: Response, statusCode: number, error: boolean, message: string) => {
        res
           .status(statusCode)
           .json({
                erro: error,
                mensagem: message
           });
    }
}

export default new HelperResponse();