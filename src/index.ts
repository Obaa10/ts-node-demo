import express from 'express';
import { connect } from "mongoose"
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import router from "./router/index"
import globalErrorHandler from "./utils/error/globalErrorHandler"

const app = express();

dotenv.config({ path: `./config.${process.env.NODE_ENV}.env` });
connectDatabase()
initMiddleware()
startApp()

function initMiddleware() {
    app.use(express.json({ limit: "10kb" }));
    app.use(cors());
    app.use(helmet());

}

function startApp() {
    const PORT = process.env.PORT || 3000;

    app.use(router)
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    app.use(globalErrorHandler)
}

async function connectDatabase() {
    connect("mongodb://127.0.0.1:27017/typescript-demo") //process.env.DATABASE!
        .then((value) => console.log("database connected successfully"))
        .catch(e => console.log(`database connection error ${e}`));
}


