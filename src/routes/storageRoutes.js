

import express from 'express'
import { subirStorage } from '../controllers/storageController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();


router.post('/subir',upload.single('Imagen'), subirStorage)


export default router;