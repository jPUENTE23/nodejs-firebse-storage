import admin from 'firebase-admin'
import serviceAcount from '../firebase-config.json' assert {type: "json"}


admin.initializeApp({
    credential: admin.credential.cert(serviceAcount),
    storageBucket: "roomworking-58256.appspot.com"
})

export const bucket = admin.storage().bucket();

