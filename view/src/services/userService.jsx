import { useToken } from '../auth/useToken';
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';



export const loginUser = async ({email, password}) => {
      const {setToken} = useToken();

      try{
            
           //const userRecord = await auth.getUserByEmail(email);
            //const {uid} = userRecord;

            
            await signInWithEmailAndPassword(auth, email, password);
            //const token = await auth.createCustomToken(uid);

            const user = auth.currentUser;
            const {token} = await user.getIdTokenResult()

            setToken(token);
            console.table(token);

            return token;
      }catch(error){
            console.log(error);
      }     
}