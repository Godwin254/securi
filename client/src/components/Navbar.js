import React from 'react';
import {Link} from 'react-router-dom'

//Navbar component
const Navbar = ({ about }) => {
   
    return (
        <div className='Navbar'>
            <h1>SECURI</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>{about}</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Navbar;