import React from 'react';
import {Link} from 'react-router-dom'

//Navbar component
const Navbar = ({ username }) => {

    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>Securi</h2>
            </div>
            <div className='links'>
                <Link to='/home'>Home</Link>
                <Link to='/notifications'>Notifications</Link>
                <div className='user-profile'>
                    <img src='img/' alt='User Profile' />
                    <span>{username}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;