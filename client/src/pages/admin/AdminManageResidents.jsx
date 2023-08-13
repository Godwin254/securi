import React, {useEffect, useState} from 'react'


import { DashboardLayout } from '../../layout'
import { Table, AddFingerprintV2 } from '../../components'
import { getLocalStorageItem } from '../../utils/utils'
import { updateResidentRecord } from '../../services/ResidentServices'

export function AdminManageResidents() {
  const [openDialog, setOpenDialog] = useState(false)
  const residents  = JSON.parse(getLocalStorageItem("estateResidents"));
  const {estate}  = JSON.parse(getLocalStorageItem("userData"));

  const handleAddFingerprint = async (data) => {

    const {residentId, fingerprintId} = data;
    await updateResidentRecord(residentId, {fingerprintId});
    console.log('added fingerprint', data)
  }

  return (
   <DashboardLayout>
      <div className='mb-6 flex flex-row items-end justify-end'>        
        <button onClick={ () => setOpenDialog(!openDialog)} type="submit" className='bg-sky-200 px-5 py-2 rounded-md text-sky-950 ml-10' >Assign Fingerprint</button>
      </div>
      {
        openDialog  && <AddFingerprintV2 estateId={estate.estateId} users={residents || []} closeDialog={setOpenDialog} handleSubmit={handleAddFingerprint} />
      }
      <Table 
        tableHeaders={["First Name", "Last Name", "Phone", "House", "Action"]}
        actions={["View","Edit", "Delete"]}
        tableData={residents || []}
        rowDataKeys={["firstname", "lastname", "phone", "house"]}

      />
   </DashboardLayout>
  )
}