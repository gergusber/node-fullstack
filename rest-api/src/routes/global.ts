import express from 'express';
import globalController from './../controllers/global';


const router = express.Router();

router.get('/', globalController.healthyCheck);


export default router;