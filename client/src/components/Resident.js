import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'

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

//footer component
const Footer = () => {

  return (
    <div className='footer'>
      <span>&copy; Copyright 2022 | brownscode</span>
    </div>
  );
}

export default Resident;
