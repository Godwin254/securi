import React from 'react'

import SharedNavbar from '../../components/SharedNavbar'
import SideNavigation from '../../components/SideNavigation'
import PageHeader from '../../components/PageHeader'
import AlertBox from '../../components/AlertBox'
import Table from '../../components/Table'
import { ClientLinks, accessTableHead } from '../../utils/utils'

function ClientManageMembers() {
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
            <PageHeader title={"Manage Members"}/>

            <div className='container'>
                  <Table 
                    theads={accessTableHead}
                  />

                  <div className='controls'>
                        <div className="card">
                              <h4>Update Resident</h4>
                        </div>
                        <div className="card">
                              <h4>Manage Devices</h4>
                        </div>
                        <div className="card">
                              <h4>Add New</h4>
                        </div>
                  </div>

            </div>

      </main>

    </div>
  )
}

export default ClientManageMembers