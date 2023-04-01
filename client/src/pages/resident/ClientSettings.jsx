import React from 'react'

import SharedNavbar from '../../components/SharedNavbar'
import SideNavigation from '../../components/SideNavigation'
import AlertBox from '../../components/AlertBox'
import RegisterResidentForm from '../../components/RegisterResidentForm'
import { ClientLinks } from '../../utils/utils'

function ClientSettings() {
  return (
    <div className="page-layout-grid">
      <SharedNavbar />
      <SideNavigation 
        links={ClientLinks}
      />

      <main className='main-content-space'>
        {
          true  ? <AlertBox type='success' text='Welcome to home page' /> : null
        }

        <RegisterResidentForm title='Account Configuration' btnText='Save Changes' />

      </main>

    </div>
  )
}

export default ClientSettings