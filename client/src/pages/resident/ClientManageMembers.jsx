import React, {useState} from 'react'

import { Table } from '../../components/'
import { DashboardLayout } from '../../layout'
import { AddNewMemberDialog } from '../../components/'
import { getLocalStorageItem } from '../../utils/utils'
import { addMember } from '../../services/ResidentServices'
import { getUserDetails } from '../../services/AuthService'
import { toast } from 'react-toastify'

export function ClientManageMembers() {
      const [open, setOpen] = useState(false);
      const {members, uid, role} = JSON.parse(getLocalStorageItem("userData"));
      const handleClickOpen = () => {
            setOpen(true);
      }

      const handleCreateNewMember = async (data) =>{

            //check if member exceed 5
            if(members.length >= 5) return toast.error('You have exceeded the maximum number of members allowed');

            await addMember(uid, data);

            await getUserDetails(uid, role); //update localstorage
      }

  return (
      <DashboardLayout>

            <div className='grid grid-col-[1fr, 400px]'>

                  <div className='mb-6 flex flex-row items-end justify-end'>
                        <button onClick={handleClickOpen} type="submit" className='bg-sky-950 px-5 py-2 rounded-md text-cyan-50' >Create Member</button>
                  </div>
                  {
                        open && <AddNewMemberDialog residentId={uid} handleSubmit={handleCreateNewMember} btnText="Create" closeDialog={setOpen} title={"Add New Member"} />
                  }
                  <Table 
                        tableHeaders={["First Name", "Last Name", "email", "Relationship", "Action"]}
                        actions={["View","Edit", "Delete"]}
                        tableData={members}
                        rowDataKeys={["firstname", "lastname", "email", "relationship"]}

                  />
            </div>
      </DashboardLayout>      
  )
}