import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import IndexServices from '../services/index.service';
import Helper from '../utils/helper';

class IndexController {

    async getAll(req: Request, res: Response) {
        IndexServices.getAll()
            .then(indexes => Helper.sendResponse(res, StatusCodes.OK, indexes))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
    }

    

}

export default new IndexController();