import React, {useState} from 'react'

import { Navbar, AlertBox, RegisterEstateForm, RegisterResidentForm } from '../../components'
import { WebLayout } from '../../layout/WebLayout';

export function Registrations() {
      const [alert, setAlert] = useState(null)

      const user = 'admin';

      const handleFormSubmit = (res) => {
            setAlert(res)
      }
  return (

      <WebLayout>
            {
                  alert ?  <AlertBox type={alert.type} text={alert.text} /> : null
            }
      
            <div className="register">
                  {
                        user === 'admin' ? 
                              <RegisterEstateForm onsubmit={handleFormSubmit} title='Register New Estate' btnText='Create New Estate'/> : 
                              <RegisterResidentForm onsubmit={handleFormSubmit} title='Resident Account Setup' btnText='Save New Changes'/>
                  }
            </div>

      </WebLayout>
   
  )
}