import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IndexInput } from '../interfaces/index.interface';
import IndexServices from '../services/index.service';
import Helper from '../utils/helper';

class IndexController {

    async getAll(req: Request, res: Response) {

        IndexServices.getAll()
            .then(indexes => Helper.sendResponse(res, StatusCodes.OK, indexes))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        IndexServices.getById(parseInt(id))
            .then(index => Helper.sendResponse(res, StatusCodes.OK, index))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
    }

    async getByYearMonth(req: Request, res: Response) {
        const { yearmonth } = req.params;

        IndexServices.getByYearMonth(parseInt(yearmonth))
            .then(index => Helper.sendResponse(res, StatusCodes.OK, index))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
    }

    async create(req: Request, res: Response) {

        const index: IndexInput = req.body;

        IndexServices.create(index)
           .then(index => Helper.sendResponse(res, StatusCodes.CREATED, index, 'Índice criado com sucesso'))
           .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const index: IndexInput = req.body;

        IndexServices.update(parseInt(id), index)
            .then(index => Helper.sendResponse(res, StatusCodes.ACCEPTED, index, 'Índice atualizado com sucesso'))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))

    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        IndexServices.delete(parseInt(id))
            .then(index => Helper.sendResponse(res, StatusCodes.OK, index, 'Índces excluído com sucesso'))
            .catch(error => Helper.sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error))
    }
}

export default new IndexController();