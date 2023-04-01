import React from 'react'

import SharedNavbar from '../../components/SharedNavbar'
import SideNavigation from '../../components/SideNavigation'
import AlertBox from '../../components/AlertBox'
import RegisterEstateForm from '../../components/RegisterEstateForm'

function AdminSettings() {
  return (
    <div className="page-layout-grid">
      <SharedNavbar />
      <SideNavigation />

      <main className='main-content-space'>
            {
                  true  ? <AlertBox type='success' text='Welcome to home page' /> : null
            }

            <RegisterEstateForm title='Estate Settings' btnText='Save Changes' />

      </main>

    </div>
  )
}

export default AdminSettings