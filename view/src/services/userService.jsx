import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

const url = `http://127.0.0.1:5001/securi-91c08/us-central1/api/users/`
const accessToken = localStorage.getItem('firebase-token');
const config = {
      headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
      }
}

export const loginUser = async ({email, password}) => {

      try{

            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            const {token} = await user.getIdTokenResult()
            decodeAccessToken(token);
            return token;

      }catch(error){
            console.log(error.message);
            //return error.message;
      }     
}

export const logoutUser = () => {
      localStorage.removeItem('firebase-token')
      localStorage.clear();
      //window.location.reload();
}

export const decodeAccessToken = (token) => {
      const encodedPayLoad = token.split('.')[1];

      const {email, user_id} =  JSON.parse(window.atob(encodedPayLoad));

      //identify user from the user
     const user = getUser(user_id) 

      return user;//{email, uid: user_id} //user
}

export const getUser = async (uid) => {

      try{
            const {data} = await axios.get(`${url}${uid}`, config);

            //console.log(data);
            return data;

      }catch(error){
            console.log(error.message);
      }
      

}

export const userRole = (user) => {
      console.log("Role", user.role);
      return user.role;
}