import React, {useState, useEffect} from 'react';
import { useNavigate, Link, useLocation, redirect } from 'react-router-dom'

import {MdOutlineLightMode, MdOutlineDarkMode, MdOutlineLogin} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai'
import { getLocalStorageItem } from '../utils/utils';

//Navbar component
export const Navbar = () => {
    const [mode, setMode] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    let authData = {};


    useEffect(() => {
        //get localStorage data
        //authData =  JSON.parse(getLocalStorageItem('authData'));
    }, [])

    const pathExists = location.pathname.includes("/auth/login") || location.pathname.includes("/auth/signup")

    //if (pathExists && authData) navigate(`/app/${authData.role}/dashboard`);
    
    const handleThemeToggle = () => {
        setMode(!mode)
    }

    return (
        <nav className='flex flex-row items-center h-[10vh] shadow-md px-24'>
            <Link to='/' className='text-3xl font-bold mr-10'>SECURI</Link>

            <Link to='/' className='mr-8'>Home</Link>
            <Link to='/about' className='mr-8'>About</Link>
            <Link to='/circuit' className='mr-8'>Circuits</Link>
            <Link to='/system-design' className='mr-8'>System Design</Link>


            <div className="navbar__icons">
                {
                    mode ? <MdOutlineDarkMode className='navbar__icons__icon' onClick={handleThemeToggle}/> : <MdOutlineLightMode  className='navbar__icons__icon' onClick={handleThemeToggle} />
                }

                {
                    !authData  ? (
                        <Link to='/auth/login' className='navbar__icons__btn'>
                            <MdOutlineLogin  className='navbar__icons__btn__icon' />
                            Login
                        </Link> 
                    ) : (

                        <Link to='' className='navbar__icons__btn logout' style={{border: "none"}} >
                            <AiOutlineUser  className='navbar__icons__btn__icon ' style={{fontSize: "1.6rem"}}/>
                            {`${authData.firstname || ""} ${authData.lastname || ""}`}
                        </Link> 
                    )
                }
                
                
            </div>

        </nav>
    )
}