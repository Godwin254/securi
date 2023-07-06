import React, {useState} from 'react'

import { DashboardLayout } from '../../layout'
import { Table } from '../../components'
import { CreateNewTagDialog } from '../../components'
import { getLocalStorageItem } from '../../utils/utils'
import { CreateNewResidentTag } from '../../services/EstateServices'



export function AdminManageDevices() {
  const [showDialog, setShowDialog] = useState(false)
  const residents  = JSON.parse(getLocalStorageItem("estateResidents"));
  const {estate}  = JSON.parse(getLocalStorageItem("userData"));
  const estateTags = JSON.parse(getLocalStorageItem("estateTags"));

  const handleCreateNewTag = async (data) => {
    //await service call
    await CreateNewResidentTag(data);
  }

  return (
    <DashboardLayout>
      <div className='mb-6 flex flex-row items-end justify-end'>
        <button onClick={() => setShowDialog(true)} type="submit" className='bg-sky-950 px-5 py-2 rounded-md text-cyan-50' >Add New Device</button>
      </div>
      {
        showDialog && <CreateNewTagDialog estateId={estate.estateId} residents={residents} handleSubmit={handleCreateNewTag}  closeDialog={setShowDialog}  />
      }
      <Table 
        tableHeaders={["Device ID", "Device Type", "Date Added", "Assigned To", "Action"]}
        actions={["Add","Edit", "Delete"]}
        tableData={estateTags || []}
        rowDataKeys={["tagId", "type", "createdAt", "resident"]}

      />
    </DashboardLayout>
  )
}