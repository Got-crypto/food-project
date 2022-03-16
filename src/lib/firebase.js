import Firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/compat/firestore'

const config = {
    apiKey: "AIzaSyBx3_fC-Tl75c_6XK9JXuh0lYjRjwVvYC8",
    authDomain: "food-project-cee2f.firebaseapp.com",
    projectId: "food-project-cee2f",
    storageBucket: "food-project-cee2f.appspot.com",
    messagingSenderId: "837420533344",
    appId: "1:837420533344:web:df1f62cd6802beaa306505"
}

const firebase = Firebase.initializeApp(config)
const {FieldValue} = Firebase.firestore

export {firebase, FieldValue}