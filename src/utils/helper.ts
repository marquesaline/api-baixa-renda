import { Response } from 'express';

class Helper {

    sendResponse = (res: Response, statusCode: number, message?: string, data?: any) => {
        res
            .status(statusCode)
            .json({
                message: message,
                result: data
            });
    }
}

export default new Helper();