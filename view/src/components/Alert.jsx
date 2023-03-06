import React from 'react'
import {MdOutlineErrorOutline, MdWarningAmber} from "react-icons/md"

function Alert({text}) {
  return (
      <div className="login__alert">
            <div className="login__alert__left">
                  <MdOutlineErrorOutline className='login__alert__left__icon' />
            </div>
            <span className='login__alert__text'>{text}</span> 
      </div>
  )
}

export default Alert;