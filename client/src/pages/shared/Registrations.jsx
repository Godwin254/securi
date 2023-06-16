import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import { CreateEstateForm, CreateResidentDetailsForm } from '../../components'
import { WebLayout } from '../../layout/WebLayout';

export function Registrations() {
      const {role} = useParams();

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