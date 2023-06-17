import React from 'react'

import { DashboardLayout } from '../../layout'
import { CreateResidentDetailsForm } from '../../components/'
import { updateResidentRecord } from '../../services/ResidentServices'
import { getLocalStorageItem } from '../../utils/utils'
import { getUserDetails } from '../../services/AuthService'

export function ClientSettings() {

  const {uid, role, vehicle, gender, dob, house, idnumber} = JSON.parse(getLocalStorageItem('userData'))

  const userInfo = {
    vehicle, gender, dob, house, idnumber
  }

  const handleUpdateResidentDetails = async (data) => {
    await updateResidentRecord(uid,data)
    await getUserDetails(uid, role)
    console.log("Update Resident Details")
  }
  return (
    <DashboardLayout>
      <CreateResidentDetailsForm handleSubmit={handleUpdateResidentDetails} userData={userInfo} title="Resident Settings" btnText="Save Changes" formWidth="w-1/1"/>
    </DashboardLayout>
  )
}