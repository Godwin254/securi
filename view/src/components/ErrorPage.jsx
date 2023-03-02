import React from 'react'
import {useNavigate} from 'react-router-dom'

function ErrorPage() {

    const navigate = useNavigate();
  return (
    <div className='Error-page'>
        <h1>404</h1>
        <h2>Page not found</h2>
        <button onClick={() => navigate('/')}>Go back to home</button>.

    </div>
  )
}

export default ErrorPage