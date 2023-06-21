import React from 'react'

import { DashboardLayout } from '../../layout'
import { Table } from '../../components'


export function AdminManageDevices() {
  return (
    <DashboardLayout>
      <div className='mb-6 flex flex-row items-end justify-end'>
        <button onClick={() => console.log("Clicked")} type="submit" className='bg-sky-950 px-5 py-2 rounded-md text-cyan-50' >Add New Device</button>
      </div>
      <Table 
        tableHeaders={["Device ID", "Device Type", "Date Added", "Assigned", "Action"]}
        actions={["Add","Edit", "Delete"]}
        tableData={[]}
        rowDataKeys={["firstname", "lastname", "phone", "house"]}

      />
    </DashboardLayout>
  )
}