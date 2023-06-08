import React from 'react'
import {Link} from 'react-router-dom'

//footer component
export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <a href="/" className='footer__logo'>SECURI</a>
            <p className='footer__text'>© {year} . All rights reserved</p>
            <div className='footer__links'>
                <a href='/'>Home</a>
                <a href='/auth/login'>Admin</a>
                <a href='/gate'>Security</a>
                <a href='https://github.com/Godwin254'>Github</a>
            </div>   
        </footer>
    );
}
