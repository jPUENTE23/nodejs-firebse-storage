# NODE JS - CONEXION A STORAGE DE FIREBASE

El siguiente respositorio realiza la carga de archivos para almacenarlos en el storage de `firebase`.

# Dependencias a descargar

1. `npm install express`
2. `npm install express-fileupload`
3. `npm install firebase-admin`
4. `npm insrall multer`
5. `npm install nodemon`

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## CREDENCIALES DE FIREBASE

1. Ingresa a la consola de Firebase con el correo electrónico que deseas trabajar.
2. Una vez dentro, ve a la configuración de tu proyecto
3. Descarga el archivo de credenciales en formato JSON

![enter image description here](https://miro.medium.com/v2/resize:fit:720/format:webp/0*fKulqt_u6tLd7_J1)

Una vez descargado, el archivo `.json` dentro de la carpeta `src/`.


## BUCKET

Dentro de la carpeta `src/config` en el archivo `firebaseAdmin.js` , modifica la propiedad `storageBucket` por el **Bucket** de tu storage.

    admin.initializeApp({ credential: admin.credential.cert(serviceAcount), storageBucket:  "tu-bucket.appspot.com"})

