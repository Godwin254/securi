import React from 'react'
import {Link} from 'react-router-dom'

//footer component
const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className='Footer'>
            <h1>SECURI</h1>
            <p>© {year} SECURI. All rights reserved</p>
            <div className='Footer__links'>
                <Link to='/'>Home</Link>
                <Link to='https://godwin254.github.io/portfolio-/'>Portfolio</Link>
                <Link to='https://github.com/Godwin254'>Github</Link>
            </div>   
        </div>
    );
}

export default Footer;