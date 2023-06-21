import React from 'react'

import { Table } from '../../components/'
import { DashboardLayout } from '../../layout'

export function ClientAccessHistory() {
  return (
    <DashboardLayout>
      <Table 
        tableHeaders={["Device ID", "Device", "Accessed By", "Access Time", "Action"]}
        actions={["View", "Delete"]}
        tableData={[]}
        rowDataKeys={["firstname", "lastname", "email", "relationship"]}

      />
    </DashboardLayout>
  )
}