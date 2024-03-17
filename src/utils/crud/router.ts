import express, { NextFunction, Request, Response } from 'express';

import catchAsync from "./../error/catchAsync";

export default class CrudRouter {
    crudModel: any;
    router = express.Router();

    constructor(crudModel: any) {
        this.crudModel = crudModel

        this.router.post('/', catchAsync(async (req: Request, res: Response) =>
            res.json(await this.crudModel.create(req.body))
        ));

        this.router.get('/', catchAsync(async (req: Request, res: Response) =>
            res.json(await this.crudModel.find())
        ));
    }
}

