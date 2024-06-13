
import { bucket } from '../config/firebaseAdmin.js'

export const subirStorage = async (req, res) => {

    if (!req.file) {
        res.status(400).json({
            message: "No hay ninguna imagen adjunta"
        })
    }

    try {

        const { nombre, appellidos, correo} = req.body;

        const nombreArchivo = `DiseñosJPG/${req.file.originalname}`
        const blob = bucket.file(nombreArchivo);
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        })

        blobStream.on('error', err => {
            res.status(500).send({ message: err.message });

        })

        blobStream.on("finish", async () => {

            const options = {
                version: 'v4',
                expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
                action: 'read'
            }

            const url = await blob.getSignedUrl(options);
            res.status(200).json({ 
                nombre,
                appellidos,
                correo,
                urlImagen: url
             });

        })

        blobStream.end(req.file.buffer);
    }
    catch (error){
        res.status(500).json({
            message: error.message
        })
    }
}

