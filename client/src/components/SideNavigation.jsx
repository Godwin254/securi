import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"

import { logoutUser } from '../services/ResidentServices'

export function SideNavigation({navigations}) {

      const navigate = useNavigate();

      const handleLogout = () => {
            //logoutUser();
            console.log('Logout')
            navigate('/auth/login');
      }

  return (
    <aside className="bg-sky-950 flex flex-col py-3">
      <h2 className="font-bold text-2xl px-6 py-3 text-cyan-50 border-b border-[#4747ec76]">SECURI</h2>
      {
            navigations.map( (link, i) => (
                  <Link key={i} to={link.url} className='text-cyan-200 flex flex-row px-6 py-6 hover:bg-[#4747ec76]'>
                        <link.icon className="icon"/>
                        <span className="font-semibold">{link.text}</span>
                  </Link>   
            ) )
      }

      <div className="flex-initiaze mt-auto flex flex-col px-3">
            <button className='flex flex-row py-2 rounded-full items-center justify-center text-lg bg-white font-regular'>
                  Logout
                  <MdOutlineLogin className='ml-4 text-xl'  onClick={handleLogout}/>
            </button>

            <span className='text-cyan-100 text-xs text-center pt-2'>
                  &copy;SECURI v1.1
            </span>
      </div>
    </aside>
  )
}