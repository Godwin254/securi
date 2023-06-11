import React from 'react'

import { Table } from '../../components/'
import { DashboardLayout } from '../../layout'
import { useGlobalContext } from '../shared'
import { GlobalContextProvider } from '../shared'

export function AdminDashboard() {

  return (
    <GlobalContextProvider residents={["residents"]}>
      <DashboardLayout>
            <Table 
              theads={["Name", "Vehicle", "House", "Time", "Status", "Actions"]}
              data={["John Doe", "KCV 144V", "House 408", "1100hrs", "Unknown"]}
              actions={["Edit", "Delete"]}
            />
      </DashboardLayout>
    </GlobalContextProvider>
  )
}