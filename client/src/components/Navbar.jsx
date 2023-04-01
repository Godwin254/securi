import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'

import {MdOutlineLightMode, MdOutlineDarkMode, MdOutlineLogin} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai'

//Navbar component
const Navbar = () => {
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

    const darkTheme = {
        color: "#ffff",
        backgroundColor: "#000"
    }


    return (
        <nav className='navbar'>
            <a href='/'>SECURI</a>

            <a href='/'>Home</a>
            <a href='/about'>About Securi</a>
            <a href='/circuits'>Circuits</a>
            <a href='/diagrams'>Diagrams</a>


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

export default Navbar;