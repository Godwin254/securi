import React from 'react'
import '../styles/components/Home.scss'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Home() {

  

  return (
    <Router>
      <div className='Home'>
        <img src="assets/images/securi-car.png" alt="background" />
        <div className="overlay"></div>
        <div className="content">
          <h1>ESTATE VEHICLE ACCESS CONTROL SYSTEM</h1>
          <p>This is an appliction that is aimed to
            curb cases of vehicle theft within major gated communities.
            This is an appliction that is aimed to
            curb cases of vehicle theft within major gated communities.
          </p>
          <Link to='/resident'><input type="button" value="Get Started" /></Link>
        </div>
      </div>
    </Router>
  )
}

export default Home;
