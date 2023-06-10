import React from 'react'

import { CreateEstateForm, CreateResidentDetailsForm } from '../../components'
import { WebLayout } from '../../layout/WebLayout';
import { getLocalStorageItem } from '../../utils/utils';

export function Registrations() {
      const {role} = JSON.parse(getLocalStorageItem("userData"));
      const handleFormSubmit = (res) => {    
      }
  return (
      <WebLayout>
            {
                  role === 'admin'
                  ? <CreateEstateForm onsubmit={handleFormSubmit} title='Register New Estate' btnText='Create New Estate'/> 
                  : <CreateResidentDetailsForm onsubmit={handleFormSubmit} title='Resident Account Setup' btnText='Save New Changes'/>
            }
      </WebLayout>
   
  )
}