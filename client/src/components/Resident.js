import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function Resident() {
  let isUser = true;
  return (
    <div>
      {
        isUser ? <Login /> : <Register />
      }
    </div>
   
  )
}

export default Resident;
