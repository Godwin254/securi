import React,{useEffect, useState} from 'react'

import { Table, AlertBox } from '../../components/'
import { DashboardLayout } from '../../layout'
import { getEstateAccessLogs } from '../../services/EstateServices'
import { getLocalStorageItem } from '../../utils/utils'
import { toast } from 'react-toastify'

export function AdminAccessHistory() {
  const [accessLogs, setAccessLogs] = useState([])
  const {estate} = JSON.parse(getLocalStorageItem("userData"));

  useEffect(() => {
    //fetch access logs
    const fetchAccessLogs = async () => {
      const data = await getEstateAccessLogs(estate.estateId)
      setAccessLogs(data)
    }
    fetchAccessLogs()
  }, []);


  return (
    <DashboardLayout>
      
       <Table 
        tableHeaders={["Resident", "Vehicle", "Number Plate", "Access Date", "Access Time", "Action"]}
        actions={["View","Archive"]}
        tableData={accessLogs || []}
        rowDataKeys={["resident", "vehicle", "numberplate", "day", "accessTime"]}

      />
    </DashboardLayout>
    
  )
}