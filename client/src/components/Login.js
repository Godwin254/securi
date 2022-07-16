import React from 'react'

export default function () {
  return (
    <div className='login'>

      <div className="sideA">
        <div className='content'>
          <h1>Securi App</h1>
          <p>
            Securi App is an IOT and web based system 
            that has been developed with an aim to help 
            curb vehicle theft within the gated communities.
            Employing a 2-factor authentication, the system is
            able to guarantee safety of a Resident's vehicle.
          </p>
        </div>
        <span>&copy Copyright | brownscode</span>
      </div> 

      <div className='sideB'>
        <h2>Welcome back</h2>
        <span>Login to access your account</span>
        <form>
          <input type="text" placeholder='Enter your username'/>
          <input type="password" placeholder='Enter your password'/>
          <input type="submit" value="Login" />
          <span>Forgot your password?</span>
        </form>
        <span></span>
        <input type='Register Account' />
      </div>
    </div>
  )
}
