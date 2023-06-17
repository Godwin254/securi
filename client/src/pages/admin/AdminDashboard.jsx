import React from 'react'

import { Table } from '../../components/'
import { DashboardLayout } from '../../layout'
import { useGlobalContext } from '../shared'
import { GlobalContextProvider } from '../shared'
import { getLocalStorageItem } from '../../utils/utils'

export function AdminDashboard() {

  const residents = JSON.parse(getLocalStorageItem('estateResidents'))

  return (
    <GlobalContextProvider residents={["residents"]}>
      <DashboardLayout>
        <Table 
          tableHeaders={["First Name", "Last Name", "Phone", "House", "Action"]}
          actions={["View","Edit", "Delete"]}
          tableData={[]}
          rowDataKeys={["firstname", "lastname", "phone", "house"]}

        />
      </DashboardLayout>
    </GlobalContextProvider>
  )
}