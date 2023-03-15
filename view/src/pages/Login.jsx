import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';

import { FcGoogle } from "react-icons/fc"
import {GrFacebook} from "react-icons/gr"
import {MdOutlineErrorOutline, MdWarningAmber} from "react-icons/md"
import {VscPass} from 'react-icons/vsc'


//import { loginUser } from '../services/userService'
import { useToken } from '../auth/useToken';
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';


import Navbar from '../components/Navbar';
import Alert from '../components/Alert'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState("");
    const {setToken} = useToken();

    //const navigate = useNavigate();

    //handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        try{

             
            if (!email || !password){
                setAlert("All inputs are required");
                return;
            }
 
             
            await signInWithEmailAndPassword(auth, email, password);
            //const token = await auth.createCustomToken(uid);
 
            const user = auth.currentUser;
            const {token} = await user.getIdTokenResult()

            //setToken(token);
            console.table(token);

        }catch(error){
            console.log(error);
        }

           

        
        //navigate('/resident');
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        switch(name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }

        //clear alert message
        setAlert("")
    }


    return (

        <>
            <Navbar />
            <div  className="login">

                {
                    alert ? (<Alert text={alert}/>) : null
                }


                <form onSubmit={handleLogin} className="login__form">

                    <h1 className="login__form__title">
                        Login
                    </h1>
                    <p className="login__form__text">
                        Enter you credentials below
                    </p>
                    <div className="login__form__control">

                        <input
                            type="email"
                            name='email'
                            placeholder='Email address'
                            onChange={handleInputChange}
                            value={email}
                        />
                    </div>
                    <div className="login__form__control">
                        <input 
                            type="password"
                            name="password"
                            placeholder='Password'
                            onChange={handleInputChange}
                            value={password}
                        />
                    </div>
                    <div className="login__form__control">

                        <input
                            type="submit"
                            value='login'
                            onClick={handleLogin}
                        />
                        <a href='/auth/forgot-password'>Forgot Password?</a>
                        <a href='/auth/register'>Dont have an account? Register</a>
                    </div>



                </form>

            </div>
        </>
        
    )
}

export default Login;