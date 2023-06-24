// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: 'AIzaSyAuQe9LnbpcVy6yd57S0My_VONQgQzwFcc',
    authDomain: 'vanlife-explorer.firebaseapp.com',
    projectId: 'vanlife-explorer',
    storageBucket: 'vanlife-explorer.appspot.com',
    messagingSenderId: '1034370059572',
    appId: '1:1034370059572:web:27aeef4acb8faec3752961',
    measurementId: 'G-W6EF79MB7T'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)