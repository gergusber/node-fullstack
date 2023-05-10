import express from 'express'
import { get, create } from './../controllers/import'


const router = express.Router()

router.get('/import', get);

router.post('/import', create);


export default router;