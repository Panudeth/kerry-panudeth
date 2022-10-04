
import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, ref } from 'firebase/database'
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const config = {
    apiKey: "AIzaSyC-V6t1W-3t5nn2Wkj_3scgxrVEO9xwjJQ",
    authDomain: "kerry-panudeth.firebaseapp.com",
    projectId: "kerry-panudeth",
    storageBucket: "kerry-panudeth.appspot.com",
    messagingSenderId: "1097450613569",
    appId: "1:1097450613569:web:03a790f306dfc6fc1f0fc0",
    measurementId: "G-696C3S57WD"
}

export const app = initializeApp(config)
export const auth = getAuth()
export const database = getDatabase(app)
export const db = getFirestore(app)
export const storage = getStorage()
export const createRef = (collection: string) => {
    return ref(database, collection)
}
