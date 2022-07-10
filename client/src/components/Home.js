import React from 'react'
import '../styles/components/Home.scss'

function Home() {
  return (
    <div className='Home'>
        <img src= "assets/images/securi-car.png" alt="background" />
        <div className ="overlay"></div>
        <div className ="content">
            <h1>ESTATE VEHICLE ACCESS CONTROL SYSTEM</h1>
            <p>This is an appliction that is aimed to
                curb cases of vehicle theft within major gated communities.
                This is an appliction that is aimed to
                curb cases of vehicle theft within major gated communities.
            </p>
            <input type="button" value="Get Started"/>
        </div>
    </div>
  )
}

export default Home;
