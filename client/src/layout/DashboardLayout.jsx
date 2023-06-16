import React, {useEffect, useState} from 'react'


import { SideNavigation, SharedNavbar, DashboardHeader } from '../components'
import { adminNavigations, residentNavigations } from '../utils/constants'
import { getDateFormat, getLocalStorageItem } from '../utils/utils'
import { logoutUser, getUserDetails } from '../services/AuthService'
import { setToLocalStorage } from '../utils/utils'
import { getAllResidents, getAllMembers } from '../services/ResidentServices'
import { cachedData } from '../utils/utils'
import { GlobalContextProvider } from '../pages/shared'
import { getEstateConfig } from '../services/EstateServices'

export  function DashboardLayout({children}) {
  const [residents, setResidents] = useState([])
  const {firstname, lastname, uid, role, estate} = JSON.parse(getLocalStorageItem("userData"))

  useEffect(() => {
    const fetchData = async () => {
      //const estateData = await getEstateConfig(estateId);
      //setEstate(estateData);
      //setResidents(await getAllResidents());
      
    };

    fetchData();
  }, [residents, estate]);

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