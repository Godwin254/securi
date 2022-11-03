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
    <div  className="LoginUser">
        <div className="LoginUser_left-container">
            <img src="assets/images/car-pro1.jpg" width="300px" alt="background" />
            <div className="overlay"></div>
            <div className='content'>
                <h1>Securi</h1>
                <p>
                    Securi is a security system that allows you to
                    monitor your home and business from anywhere in the world.
                </p>
            </div>
        </div>

        <div className="LoginUser_right-container">
            <h2>Already Have An Account?</h2>
            <span>Sign in to your account.</span>

            { error && <div className="LoginUser__right-container__errorMsg">{error}</div> }

            <form>
                <div className="LoginUser__form-control">
                    <input
                        type="text" 
                        placeholder='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        type="password" 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="LoginUser__form-control">

                      <input
                          type="button"
                          value='Login'
                          onClick={handleLogin}
                          disabled={!email || !password}
                      />
                    <Link to='/forgot-password'>Forgot Password?</Link>
                    <Link to='/register'>Dont have an account? Register</Link>
                </div>

                <div className='LoginUser__oath'>
                    <span>Signin with:</span>
                    <FcGoogle className="i"/>
                    <GrFacebook className="i" />

                </div>

            </form>
        </div>

    </div>
  )
}

export default LoginUser