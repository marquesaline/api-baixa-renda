import { Response } from 'express';

class Helper {

    sendResponse = (res: Response, statusCode: number, data?: any, message?: string,) => {
        res
            .status(statusCode)
            .json({
                message: message,
                result: data
            });
    }
}

export default new Helper();