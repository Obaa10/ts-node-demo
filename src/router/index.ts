import express from 'express';

import auth from './auth';
import task from './../model/task';
import crudRouter from './../utils/crud/router';

const router = express.Router();

router.use('/auth', auth);
router.use('/task', (new crudRouter(task)).router);


export default router;