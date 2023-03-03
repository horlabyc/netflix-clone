// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAivudELhoPamjCrlLlApdYLVkOYp1yawo",
    authDomain: "netflix-clone-bd16d.firebaseapp.com",
    projectId: "netflix-clone-bd16d",
    storageBucket: "netflix-clone-bd16d.appspot.com",
    messagingSenderId: "951664472463",
    appId: "1:951664472463:web:2713d4ca2900a0b26c9bfa"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }