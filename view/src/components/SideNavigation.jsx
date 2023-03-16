import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"

import { logoutUser } from '../services/userService'

function SideNavigation() {

      const navigate = useNavigate();

      const handleLogout = () => {
            logoutUser();
            navigate('/auth/login');
      }

  return (
    <aside className="aside">
      <Link to="/admin/dashboard">
            <MdSpaceDashboard className="icon"/>
            <span className="tooltip">Dashboard</span>
      </Link>
      <a href="/members">
            <HiUsers className="icon"/>
            <span className="tooltip">Members</span>
           
      </a>
      <a href="/devices">
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
            <a href="">
                  <MdOutlineLogin className='aside__controls__icon icon'  onClick={handleLogout}/>
            </a>

            <span>
                  &copy;SECURI v1.1
            </span>
      </div>
    </aside>
  )
}

export default SideNavigation