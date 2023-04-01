import React from 'react'

import SharedNavbar from '../../components/SharedNavbar'
import SideNavigation from '../../components/SideNavigation'
import PageHeader from '../../components/PageHeader'
import AlertBox from '../../components/AlertBox'
import Table from '../../components/Table'
import { ClientLinks, accessTableHead } from '../../utils/utils'

function ClientAccessHistory() {
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
            <PageHeader title={"Access History"}/>

            <div className="container-no-grid">
                  <Table 
                    heads={accessTableHead}
                  />
            </div>

      </main>

    </div>
  )
}

export default ClientAccessHistory