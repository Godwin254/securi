import React, {useEffect, useState} from 'react'


import { SideNavigation, SharedNavbar, DashboardHeader } from '../components'
import { adminNavigations, residentNavigations } from '../utils/constants'
import { getDateFormat, getLocalStorageItem } from '../utils/utils'
import { logoutUser, getUserDetails } from '../services/AuthService'
import { setToLocalStorage } from '../utils/utils'
import { getAllResidents, getAllMembers } from '../services/ResidentServices'
import { cachedData } from '../utils/utils'
import { GlobalContextProvider } from '../pages/shared'

export  function DashboardLayout({children}) {
  const [residents, setResidents] = useState([])
  const {firstname, lastname, estate, uid, role} = JSON.parse(getLocalStorageItem("userData"))

  useEffect(() => {
    const fetchData = async () => {
      const updatedDetails = await getUserDetails(uid, role);
      setResidents(await getAllResidents());
      
    };

    fetchData();
  }, []);

  return (
    <GlobalContextProvider residents={estate}>
      <div className='grid grid-cols-[200px,1fr] h-screen w-screen'>
        <SideNavigation navigations={adminNavigations} handleLogout = {logoutUser}/>
        <div className='bg-gray-50'>
          <SharedNavbar firstname={firstname} lastname={lastname } estateName={estate.estateName} userId={uid}/>
          <DashboardHeader title={"Section Name"} date={getDateFormat("string")}/>
            <main className='px-24 my-6 '>
              {children}
            </main>
        </div>
      </div>
    </GlobalContextProvider>
  )
}