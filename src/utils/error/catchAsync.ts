import { Request, Response, NextFunction } from 'express';

const errorHandlerMiddleware = (fn: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};
export default errorHandlerMiddleware;
