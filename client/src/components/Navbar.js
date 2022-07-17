import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/components/Navbar.scss'

//Navbar component
const Navbar = ({ username }) => {

    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>Securi</h2>
            </div>
            <div className='links'>
                <Link to='/home'>Home</Link>
                <Link to='/notifications'>Notifications <span>{12}</span></Link>
                <div className='user-profile'>
                    <img src='assets/images/user1.jpg' alt='User Profile' width='100px'/>
                    <span>{username}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;