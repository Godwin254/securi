import React from 'react'
import {useState} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom';
import { toast } from 'react-toastify';


//icons
import { FcGoogle } from "react-icons/fc"
import {GrFacebook} from "react-icons/gr"
import {MdOutlineErrorOutline, MdWarningAmber} from "react-icons/md"
import {VscPass} from 'react-icons/vsc'


import { loginUser } from '../../services/AuthService';
import { useToken } from '../../auth/useToken';
import {AlertBox } from '../../components/';
import { WebLayout } from '../../layout/WebLayout';
import { pathNavigator } from '../../utils/utils';
import { getLocalStorageItem } from '../../utils/utils';
import { getUserDetails } from '../../services/AuthService';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(null);

    const [,setToken] = useToken();
    const navigate = useNavigate();
    //const {uid} = useParams()

    //handle login
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password){
            toast.info("Email or Password required!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000});
            return;
        }
        
        const {token, role } = await loginUser({email, password});

        if(!token){
            toast.error("An Error occured when logging in!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000});
            return;
        }
        setToken(token);
        toast.success("Successful Login!", { position: toast.POSITION.TOP_CENTER});
        
        if (role === "user"){
            setTimeout(() => {
                navigate(`/app/resident/dashboard`);
            },1000)
        }else if (role === "admin"){
            setTimeout(() => {
                navigate(`/app/admin/dashboard`);
            },1000)
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
        <WebLayout>
             {
                alert ? (<AlertBox type={alert.type} text={alert.text}/>) : null
            }


            <form onSubmit={handleLogin} className="w-[23vw] bg-white shadow-lg border-2 border-gray-100 mx-auto p-5 px-8 rounded-lg">

                <h1 className="text-3xl font-semibold">
                    Login
                </h1>
                <p className="text-md my-2 mb-6">
                    Enter you credentials below
                </p>
                <div className="border-b border-[#cccc] mb-5">

                    <input
                        className=' w-full py-3 px-4 outline-none'
                        type="email"
                        name='email'
                        placeholder='Email address'
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>
                <div className="border-b border-[#cccc] mb-5">
                    <input 
                        className=' w-full py-3 px-4 outline-none'
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
                        value='Confirm'
                        onClick={handleLogin}
                    />
                    <Link to='/auth/forgot-password'>Forgot Password?</Link>
                    <Link to='/auth/signup'>Dont have an account? Register</Link>
                </div>



            </form>

        </WebLayout>
        
    )
}