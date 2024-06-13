
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import admin from 'firebase-admin';
import serviceAccount from './firebase-config.json' assert{type: "json"}
import { assert } from 'console';

import storageRoutes from './routes/storageRoutes.js'

dotenv.config()

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: "roomworking-58256.appspot.com"
// });

const app = express();
app.use(express.json())
// app.use(express.urlencoded({ extended: true}))
// app.use(cors({origin: "*"}))

app.use('/storage', storageRoutes)

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Escuchando desde el puerto " + port)
})


