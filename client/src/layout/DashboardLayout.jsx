import React, {useEffect, useState} from 'react'


import { SideNavigation, SharedNavbar, DashboardHeader } from '../components'
import { adminNavigations, userNavigations } from '../utils/constants'
import { getDateFormat, getLocalStorageItem } from '../utils/utils'
import { logoutUser, getUserDetails } from '../services/AuthService'
import { getAllResidents, getAllResidentsByEstate } from '../services/ResidentServices'
import { cachedData } from '../utils/utils'
import { GlobalContextProvider } from '../pages/shared'
import { getAllEstateTags } from '../services/EstateServices'

export  function DashboardLayout({children}) {
  const {firstname, lastname, uid, role, estate} = JSON.parse(getLocalStorageItem("userData"))

  const pageTitle = `SECURI ${role === 'admin' ? 'Admin' : 'Resident'} | ${estate.estateName}`;

  useEffect(() => {
    document.title = pageTitle;
    const fetchData = async () => {
      role === "admin" && await getAllResidentsByEstate(estate.estateId);
      role === "admin" && await getAllEstateTags(estate.estateId);
    };

    fetchData();
  }, []);

  return (
    <GlobalContextProvider residents={estate}>
      <div className='grid grid-cols-[200px,1fr] h-screen w-screen'>
        <SideNavigation adminNavigations={adminNavigations} userNavigations={userNavigations} handleLogout = {logoutUser} role={role}/>
        <div className='bg-gray-50'>
          <SharedNavbar firstname={firstname} lastname={lastname } estateName={estate.estateName} userId={uid} role={role}/>
          <DashboardHeader title={"Section Name"} date={getDateFormat("string")}/>
            <main className='px-24 my-6 '>
              {children}
            </main>
        </div>
      </div>
    </GlobalContextProvider>
  )
}