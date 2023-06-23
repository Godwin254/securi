import React from 'react'
import { useNavigate } from 'react-router-dom'

import { DashboardLayout } from '../../layout'

export function ClientDashboard() {

      const navigate = useNavigate()
  return (
      <DashboardLayout>
            
            <div className="flex flex-col items-center justify-center p-5 h-[60vh]">
                  <p className="text-2xl font-bold text-gray-700">Quick Start Dasboard</p>
                  <p className="text-md text-gray-700">
                        You can manage your estate members and view access logs here
                  </p>

                  <div className="flex flex-row items-center justify-center mt-10">
                        <button onClick={() => navigate("/app/resident/manage-members")} className="bg-blue-800 text-white  border-2 border-gray-100 p-5 mx-5 px-8 rounded-md">  
                              Manage Members  
                        </button>
                        <button onClick={() => navigate("/app/resident/access-history")} className="bg-white border-2 border-gray-100  mx-5 p-5 px-8 rounded-md">
                              View Access Log
                        </button>
                  </div>
            </div>
            

      </DashboardLayout>
  )
}