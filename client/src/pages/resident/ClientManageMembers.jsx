import React, {useState} from 'react'

import { Table } from '../../components/'
import { DashboardLayout } from '../../layout'
import { AddNewMemberDialog } from '../../components/'

export function ClientManageMembers() {
      const [open, setOpen] = useState(false);
      const handleClickOpen = () => {
            setOpen(true);
      }
  return (
      <DashboardLayout>

            <div className='grid grid-col-[1fr, 400px]'>

                  <div className='mb-6 flex flex-row items-end justify-end'>
                        <button onClick={handleClickOpen} type="submit" className='bg-sky-950 px-5 py-2 rounded-md text-cyan-50' >Create Member</button>
                  </div>
                  {
                        open && <AddNewMemberDialog btnText="Create" closeDialog={setOpen} title={"Add New Member"} />
                  }
                  <Table 
                        theads={["Name", "Vehicle", "House", "Time", "Status", "Actions"]}
                        data={["John Doe", "KCV 144V", "House 408", "1100hrs", "Unknown"]}
                        actions={["Edit", "Delete"]}
                  />
            </div>
      </DashboardLayout>      
  )
}