import express from 'express'
import { get, create } from './../controllers/export'


const router = express.Router();
// add validation

router.get('/export', get);

router.post('/export', create);


export default router