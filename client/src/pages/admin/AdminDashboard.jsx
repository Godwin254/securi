import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Table } from '../../components/'
import { DashboardLayout } from '../../layout'
import { useGlobalContext } from '../shared'
import { GlobalContextProvider } from '../shared'
import { getLocalStorageItem } from '../../utils/utils'

export function AdminDashboard() {

  const navigate = useNavigate()

  return (
    <GlobalContextProvider residents={["residents"]}>
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center p-5 h-[60vh]">
          <p className="text-2xl font-bold text-gray-700">Quick Start Dasboard</p>
          <p className="text-md text-gray-700">
                You can manage your estate residents and Manage Devices here
          </p>

          <div className="flex flex-row items-center justify-center mt-10">
                <button onClick={() => navigate("/app/admin/manage-devices")} className="bg-blue-800 text-white  border-2 border-gray-100 p-5 mx-5 px-8 rounded-md">  
                  Manage Devices  
                </button>
                <button onClick={() => navigate("/app/admin/manage-residents")} className="bg-white border-2 border-gray-100  mx-5 p-5 px-8 rounded-md">
                  Manage Residents
                </button>
          </div>
        </div>
      </DashboardLayout>
    </GlobalContextProvider>
  )
}