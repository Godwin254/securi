import React from 'react'

import SharedNavbar from '../../components/SharedNavbar'
import SideNavigation from '../../components/SideNavigation'
import PageHeader from '../../components/PageHeader'
import AlertBox from '../../components/AlertBox'
import Table from '../../components/Table'
import { AdminLinks, accessTableHead } from '../../utils/utils'

function AdminDashboard() {
  return (
    <div className="page-layout-grid">
      <SharedNavbar />
      <SideNavigation 
            links={AdminLinks}
      />

      <main className='main-content-space'>
            {
                  true  ? <AlertBox type='success' text='Welcome to home page' /> : null
            }
            <PageHeader title={"Dashboard"}/>

            <div className='container'>
                  <Table 
                    theads={accessTableHead}
                  />

                  <div className='controls'>
                        <div className="card">
                              <h4>Residents</h4>
                              <span>{"12"}</span>
                        </div>
                        <div className="card">
                              <h4>Devices</h4>
                              <span>{"12"}</span>
                        </div>
                        <div className="card">
                              <h4>Security</h4>
                              <span>{"12"}</span>
                        </div>
                  </div>

            </div>

      </main>

    </div>
  )
}

export default AdminDashboard