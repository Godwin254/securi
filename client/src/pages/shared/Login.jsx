import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';

import { FcGoogle } from "react-icons/fc"
import {GrFacebook} from "react-icons/gr"
import {MdOutlineErrorOutline, MdWarningAmber} from "react-icons/md"
import {VscPass} from 'react-icons/vsc'


import { loginUser, decodeAccessToken, userRole } from '../../services/ResidentServices'
import { useToken } from '../../auth/useToken';

import Navbar from '../../components/Navbar';
import AlertBox from '../../components/AlertBox'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(null);

    const [,setToken] = useToken();
    const navigate = useNavigate();

    //handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password){
            setAlert({type: 'warning', text: "All inputs are required"});
            return;
        }
        
        const token = await loginUser({email, password});

        if(!token && token === undefined){
            setAlert({ type: 'error', text:"An error occured on login!"})
            navigate('/app');
            return;
        }

        setToken(token);

        const {role} = await decodeAccessToken(token);

        setAlert({ type: 'success', text:"Login Success!!!"})

        if (role === "user"){
            setTimeout(() => {
                navigate('/user/dashboard');
            },500)
        }else if (role === "admin"){
            setTimeout(() => {
                navigate('/admin/dashboard');
            },500)
        }

        //clear inputs
        setEmail("");
        setPassword("");

        
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
                    alert ? (<AlertBox type={alert.type} text={alert.text}/>) : null
                }


                <form onSubmit={handleLogin} className="login__form box-bg-shadow">

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
                        <Link to='/auth/forgot-password'>Forgot Password?</Link>
                        <Link to='/auth/signup'>Dont have an account? Register</Link>
                    </div>



                </form>

            </div>
        </>
        
    )
}

export default Login;