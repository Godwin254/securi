import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import ResidentDashboard from './ResidentDashboard'


function Resident() {
  //control variables
  let isUser = false; //not a registered user
  let loggedIn = true; //user currently loggedIn
  return (
    <div>
      {
        loggedIn ? <ResidentDashboard /> :
        isUser ? <Login /> : <Register />
      }
     
    </div>
   
  )
}

export default Resident;
