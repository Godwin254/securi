import React from 'react'
import {TiTick} from "react-icons/ti"
import {IoWarningOutline} from "react-icons/io5"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineError} from "react-icons/md"

export function AlertBox({type,text}) {
  return (
      <div className={
            `alert-box slide-from-top ${
                  type === 'success' ? 'alert-success' :
                  type === 'warning' ? 'alert-warning' :
                  type === 'info' ? 'alert-info' : 'alert-error'
            }`
      } >
            <div className="icon-box">
                  {
                        type === 'success' ? <TiTick className='icon' /> :
                        type === 'warning' ? <IoWarningOutline className='icon' /> : 
                        type === 'info' ? <BsInfoCircle className='icon' /> : <MdOutlineError className='icon' />
                  }
            </div>
            <p className='alert-text'>{text}</p> 
      </div>
  )
}
