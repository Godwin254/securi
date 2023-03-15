import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig1 = {
  // Your Firebase config here
  projectId: "securi-91c08",
  databaseURL: "http://127.0.0.1:8080",
  authDomain: "https://localhost:9099"
};

const firebaseConfig = {
  apiKey: "AIzaSyCmQ0fHvC92PXTookAwf2nMlPa9J4rIiUQ",
  authDomain: "securi-91c08.firebaseapp.com",
  projectId: "securi-91c08",
  storageBucket: "securi-91c08.appspot.com",
  messagingSenderId: "871186322809",
  appId: "1:871186322809:web:c476b022ee4b7930aa4ba8",
  //databaseURL: 'http://localhost:8080',
  //authDomain: 'localhost:9099',
};

const app1 = initializeApp(firebaseConfig)
const auth = getAuth(app1)



export {auth}