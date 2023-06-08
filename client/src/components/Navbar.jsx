import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom'

import {MdOutlineLightMode, MdOutlineDarkMode, MdOutlineLogin} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai'

//Navbar component
export const Navbar = () => {
    const [mode, setMode] = useState(false);
    const [user, setUser] = useState(false)

    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(false)
    }

    const handleLogin = () => {
        setUser(true)
        navigate('/auth/login')
    }
    
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
                    !user ? (
                        <a to='/login' className='navbar__icons__btn' onClick={handleLogin}>
                            <MdOutlineLogin  className='navbar__icons__btn__icon' />
                            Login
                        </a> 
                    ) : (

                        <a to='/login' className='navbar__icons__btn logout' style={{border: "none"}} onClick={handleLogout}>
                            <AiOutlineUser  className='navbar__icons__btn__icon ' style={{fontSize: "1.6rem"}}/>
                            {
                                "[Hello],"
                            }
                            Logout
                        </a> 
                    )
                }
                
                
            </div>

        </nav>
    )
}