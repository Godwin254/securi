import React from 'react'

import { Table, AlertBox } from '../../components/'
import { DashboardLayout } from '../../layout'

export function AdminAccessHistory() {
  return (
    <DashboardLayout>
       <Table 
        tableHeaders={["Resident", "Vehicle", "Number Plate", "Accessed By", "Access Time", "Action"]}
        actions={["View","Archive"]}
        tableData={[]}
        rowDataKeys={["firstname", "lastname", "phone", "house"]}

      />
    </DashboardLayout>
    
  )
}