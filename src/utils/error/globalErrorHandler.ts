import { Request, Response, NextFunction } from 'express';


export default (error: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        message: error.message || 'An unexpected error occurred',
    });
}