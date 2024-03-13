import express, { Request, Response, NextFunction } from 'express';
import { connect } from "mongoose"

import auth from "./router/auth"

const app = express();
const port = 3000;


connectDatabase()
initMiddleware()
startApp()

function initMiddleware() {
    app.use(express.json({ limit: "10kb" }));
}


function startApp() {
    app.use(auth)
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    app.use((error: any, req: Request, res: Response, next: NextFunction) => {
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'An unexpected error occurred',
        });
    })
}

async function connectDatabase() {
    connect('mongodb://127.0.0.1:27017/typescript-test')
        .then((value) => console.log("database connected successfully"))
        .catch(e => console.log("connection error"));
}


