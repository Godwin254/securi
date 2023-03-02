import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import {GrFacebook} from "react-icons/gr"
import {MdOutlineErrorOutline, MdWarningAmber} from "react-icons/md"
import {VscPass} from 'react-icons/vsc'



import axios from 'axios'
import {useToken} from '../auth/useToken'

import Navbar from '../components/Navbar';

function Login() {
    const [token, setToken] = useToken();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState("some alert message ");

    //const navigate = useNavigate();

    //handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await axios.post('api/residents/login', {
            email,
            password
        });

        const {token} = res.data;
        setToken(token);

        //check if user or admin
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
                    !alert ? (
                        <div className="login__alert">
                            <div className="login__alert__left">
                                <MdOutlineErrorOutline className='login__alert__left__icon' />
                            </div>
                            <span className='login__alert__text'>{alert}</span> 
                        </div>
                    ) : null
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
                            type="text"
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
                            type="button"
                            value='Login'
                            onClick={handleLogin}
                            disabled={!email || !password}
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