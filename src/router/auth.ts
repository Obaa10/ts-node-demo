import { login, signup } from "./../controller/auth"
import express, { NextFunction, Request, Response } from 'express';
import catchAsync from "../utils/error/catchAsync";

const router = express.Router();

router.post('/signup', catchAsync(async (req: Request, res: Response) => {
    const { user_name, email, password } = req.body
    res.json(await signup(user_name, email, password))
}));

router.post('/login', catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body
    res.json(await login(email, password))
}));



export default router;