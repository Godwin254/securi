import React from 'react'

import { DashboardLayout } from '../../layout'
import { CreateEstateForm } from '../../components'

export function AdminSettings() {

  const handleUpdateSettings =  () => {

  }
  return (
    <DashboardLayout>
      <div className='grid grid-cols-[200px,1fr] gap-20'>
        <div className='flex flex-col'>
          <span className='border-b border-ccc text-gray-400 text-lg px-1 py-2 mb-4 cursor-pointer hover:bg-sky-50'>Estate Settings</span>
          <span className='border-b border-ccc text-gray-400 text-lg px-1 py-2 mb-4 cursor-pointer hover:bg-sky-50'>Account</span>
          <span className='border-b border-ccc text-gray-400 text-lg px-1 py-2 mb-4 cursor-pointer hover:bg-sky-50'>Houses</span>
          <span className='border-b border-ccc text-gray-400 text-lg px-1 py-2 mb-4 cursor-pointer hover:bg-sky-50'>Theme</span>
          <span className='border-b border-ccc text-gray-400 text-lg px-1 py-2 mb-4 cursor-pointer hover:bg-sky-50'>Privacy</span>
          <span className='border-b border-ccc text-gray-400 text-lg px-1 py-2 mb-4 cursor-pointer hover:bg-sky-50'>Documents</span>

        </div>
        <CreateEstateForm onsubmit={handleUpdateSettings} title='Edit Estate Configuration' btnText='Save Changes' formWidth="w-1/1"/>
      </div>
      
    </DashboardLayout>
  )
}