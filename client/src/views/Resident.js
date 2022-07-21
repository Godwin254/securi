import React from 'react'
import {Link, Route, Routes, useRoutes } from 'react-router-dom';
import Login from '../components/Login'
import Register from '../components/Register'
import ResidentDashboard from '../components/ResidentDashboard'


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
