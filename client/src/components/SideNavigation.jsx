import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"

import { logoutUser } from '../services/ResidentServices'

function SideNavigation() {

      const navigate = useNavigate();

      const handleLogout = () => {
            //logoutUser();
            console.log('Logout')
            navigate('/auth/login');
      }

  return (
    <aside className="aside">
      <Link to="/app">
            <MdSpaceDashboard className="icon"/>
            <span className="tooltip">Dashboard</span>
      </Link>
      <Link to="/app/manage-residents">
            <HiUsers className="icon"/>
            <span className="tooltip">Members</span>
           
      </Link>
      <Link to="/app/manage-devices">
            <RiDeviceFill className="icon"/>
            <span className="tooltip">Devices</span>
            
      </Link>
      <Link to="/app/access-history">
            <MdAccessTimeFilled className="icon"/>
            <span className="tooltip">Access</span>
            
      </Link>
      <Link to="/app/settings">
            <MdManageAccounts className="icon" />
            <span className="tooltip">Account</span>
            
      </Link>

      <div className="aside__controls">
            <Link to="">
                  <MdOutlineLogin className='aside__controls__icon icon'  onClick={handleLogout}/>
            </Link>

            <span>
                  &copy;SECURI v1.1
            </span>
      </div>
    </aside>
  )
}

export default SideNavigation