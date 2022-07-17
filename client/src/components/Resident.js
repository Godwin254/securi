import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function Resident() {
  let isUser = true;
  return (
    <div>
      {
        //isUser ? <Login /> : <Register />
      }
      <ResidentDashboard />
    </div>
   
  )
}

//resident dashboard
const ResidentDashboard = () => {

  return (
    <div className="resident-dash">
      <Navbar username = "John Doe" />

      <Footer />
    </div>
  );
}

//Navbar component
const Navbar = ({username}) => {

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

//footer component
const Footer = () => {

  return (
    <div className='footer'>
      <span>&copy; Copyright 2022 | brownscode</span>
    </div>
  );
}

export default Resident;
