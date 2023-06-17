import React, {useEffect} from 'react'

import { DashboardLayout } from '../../layout'
import { Table } from '../../components'
import { getLocalStorageItem } from '../../utils/utils'

export function AdminManageResidents() {

  const residents = JSON.parse(getLocalStorageItem('estateResidents'))

  return (
   <DashboardLayout>
      <Table 
        tableHeaders={["First Name", "Last Name", "Phone", "House", "Action"]}
        actions={["View","Edit", "Delete"]}
        tableData={residents}
        rowDataKeys={["firstname", "lastname", "phone", "house"]}

      />
   </DashboardLayout>
  )
}