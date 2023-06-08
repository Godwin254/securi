import React from 'react'
import {useParams} from 'react-router-dom'

import { SideNavigation, SharedNavbar, DashboardHeader } from '../components'
import { adminNavigations, residentNavigations } from '../utils/constants'

import { getAdminDetails } from '../services/AdminServices'

export function DashboardLayout({children}) {
  const {uid} = useParams()
  const res = getAdminDetails(uid);
  console.log(res)
  const date = new Date().toDateString();
 
  return (
    <div className='grid grid-cols-[200px,1fr] h-screen w-screen'>
      <SideNavigation navigations={adminNavigations}/>

      <div className='bg-gray-50'>
        <SharedNavbar firstname={firstname} lastname={lastname} estateName={estate.estateName}/>
        <DashboardHeader title={"Section Name"} date={date}/>
        <main className='px-24 my-6 '>
          {children}
        </main>
      </div>

    </div>
  )
}