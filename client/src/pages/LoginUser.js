import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import {GrFacebook} from "react-icons/gr"
import axios from 'axios'
import {useToken} from '../auth/useToken'

function LoginUser() {
    const [token, setToken] = useToken();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    //image
    const image = require('../images/test-img1.jpg')
    //handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await axios.post('api/residents/login', {
            email,
            password
        });

        const {token} = res.data;
        setToken(token);
        navigate('/resident');
    }
  return (
    <div  className="RegisterUser">
        <div className="RegisterUser__left-container">
            <img src={image} width="300px" alt="background" />
              <div className="RegisterUser__left-container__overlay"></div>
              <div className='RegisterUser__left-container__content'>
                <h1>Sign in and monitor your account</h1>
                <p>
                    Securi is a security system that allows you to
                    monitor access to your vehicle from anywhere in the world.
                </p>
            </div>
        </div>

        <div className="RegisterUser__right-container">
            <h2>Welcome back, Resident!</h2>

            <span>Hello error</span> 

            <form onSubmit={handleLogin}>
                <div className="form-control">
        
                    <input
                        type="text"
                        placeholder='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-control">
                    <input 
                        type="password" 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="form-control login-buttons">

                    <input
                        type="button"
                        value='Login'
                        onClick={handleLogin}
                        disabled={!email || !password}
                    />
                    <Link to='/forgot-password'>Forgot Password?</Link>
                    <Link to='/register'>Dont have an account? Register</Link>
                </div>

                <div className='oath'>
                    <p>Signin with:</p>
                    <FcGoogle className="i"/>
                    <GrFacebook className="i" />

                </div>

            </form>
        </div>

    </div>
  )
}

export default LoginUser