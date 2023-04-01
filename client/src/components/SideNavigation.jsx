import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"

import { logoutUser } from '../services/ResidentServices'

function SideNavigation({links}) {

      const navigate = useNavigate();

      const handleLogout = () => {
            //logoutUser();
            console.log('Logout')
            navigate('/auth/login');
      }

  return (
    <aside className="aside">

      {
            links.map( (link, i) => (
                  <Link key={i} to={link.url}>
                        <link.icon className="icon"/>
                        <span className="tooltip">{link.text}</span>
                  </Link>   
            ) )
      }

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