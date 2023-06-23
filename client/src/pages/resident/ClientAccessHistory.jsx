import React, {useEffect, useState} from 'react'

import { Table } from '../../components/'
import { DashboardLayout } from '../../layout'
import { getResidentAccessLogs } from '../../services/ResidentServices'
import { getLocalStorageItem } from '../../utils/utils'

export function ClientAccessHistory() {
  const [accessLogs, setAccessLogs] = useState([])
  const {uid} = JSON.parse(getLocalStorageItem("userData"));

  useEffect(() => {
    //fetch access logs
    const fetchAccessLogs = async () => {
      const data = await getResidentAccessLogs(uid)
      setAccessLogs(data)
    }
    fetchAccessLogs()
  }, []);
  return (
    <DashboardLayout>
     <Table 
        tableHeaders={["Device ID", "Vehicle", "Number Plate", "Accessed By", "Access Date", "Access Time", "Action"]}
        actions={["View"]}
        tableData={accessLogs}
        rowDataKeys={["tagId", "vehicle", "numberplate","accessedBy", "day", "accessTime"]}

      />
    </DashboardLayout>
  )
}