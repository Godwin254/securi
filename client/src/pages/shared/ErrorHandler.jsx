import React from 'react'
import {useNavigate} from 'react-router-dom'

export function ErrorHandler() {

    const navigate = useNavigate();
  return (
    <div className='errorpage'>
        <h1 className="errorpage__title">Error 404!!</h1>
        <p className="errorpage__text">The path you are looking for is probably not existing or not defined</p>
        <button className="errorpage__button" onClick={() => navigate('/')}>Go back to home</button>.

    </div>
  )
}