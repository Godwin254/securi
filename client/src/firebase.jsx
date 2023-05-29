import { initializeApp } from 'firebase/app'
import {getAuth, connectAuthEmulator} from 'firebase/auth'
import { firebaseConfig } from './config/firebase';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

/*
if (window.location.hostname.includes('localhost')){
  connectAuthEmulator(auth, "http://localhost:9099")
}*/


export {auth}