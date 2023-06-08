import React from 'react'

import SharedNavbar from '../../components/SharedNavbar'
import SideNavigation from '../../components/SideNavigation'
import PageHeader from '../../components/DashboardHeader'
import AlertBox from '../../components/AlertBox'
import Table from '../../components/Table'
import { ClientLinks,deviceTableHead } from '../../utils/utils'

export function ClientManageDevices() {
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
            <PageHeader title={"Manage Devices"}/>

            <div className='container'>
                  <Table 
                    theads={deviceTableHead}
                  />

                  <div className='controls'>
                        <div className="card">
                              <h4>Fingerprints</h4>
                        </div>
                        <div className="card">
                              <h4>Tags</h4>
                        </div>
                  </div>

            </div>

      </main>

    </div>
  )
}