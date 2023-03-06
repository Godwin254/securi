import React from 'react'

import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"


function SideNavigation() {
  return (
    <aside className="aside">
      <a href="/dashboard">
            <MdSpaceDashboard className="icon"/>
            <span className="tooltip">Dashboard</span>
      </a>
      <a href="/members">
            <HiUsers className="icon"/>
            <span className="tooltip">Members</span>
           
      </a>
      <a href="/Devices">
            <RiDeviceFill className="icon"/>
            <span className="tooltip">Devices</span>
            
      </a>
      <a href="/access">
            <MdAccessTimeFilled className="icon"/>
            <span className="tooltip">Access</span>
            
      </a>
      <a href="/account">
            <MdManageAccounts className="icon" />
            <span className="tooltip">Account</span>
            
      </a>

      <div className="aside__controls">
            <a href="/logout">
                  <MdOutlineLogin className='aside__controls__icon icon' />
            </a>

            <span>
                  &copy;SECURI v1.1
            </span>
      </div>
    </aside>
  )
}

export default SideNavigation