import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCXVbMEe9iilgYe9G80kN6MsulDPlNTKqk",
    authDomain: "my-money-bc04f.firebaseapp.com",
    projectId: "my-money-bc04f",
    storageBucket: "my-money-bc04f.appspot.com",
    messagingSenderId: "428322164695",
    appId: "1:428322164695:web:51f4d4dc4034bda0fac592"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore=firebase.firestore()
const projectAuth=firebase.auth()

//time stamp
const timestamp=firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}