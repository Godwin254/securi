import {auth} from '../firebase'
import axios from 'axios';

const url = `http://127.0.0.1:5001/securi-91c08/us-central1/api/auth`
const accessToken = localStorage.getItem('firebase-token');
const config = {
      headers: {
            
            'Content-Type': 'application/json',
            'Accept': 'application/json'
      }
}


//login user
export const loginUser = async ({email, password}) => {
      try{
            const {data} = await axios.post(`${url}/login`, {email, password}, config);
            return data;
      }catch(error){
            return {error: error.message};
      }     
}

//register user
export const registerUser = async (userData) => {
      try{
            const {data} = await axios.post(`${url}/signup`, userData, config);
            return data;
      }catch(error){
            //display some UI
            return {error: error.message};
      }
}