import React from 'react'

import SharedNavbar from '../../components/SharedNavbar'
import SideNavigation from '../../components/SideNavigation'
import PageHeader from '../../components/PageHeader'
import AlertBox from '../../components/AlertBox'
import Table from '../../components/Table'
import { AdminLinks } from '../../utils/utils'

function AdminAccessHistory() {
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
        <PageHeader title={"Access History"}/>

        <div className="container-no-grid">
          <Table />
        </div>

      </main>

    </div>
  )
}

export default AdminAccessHistory