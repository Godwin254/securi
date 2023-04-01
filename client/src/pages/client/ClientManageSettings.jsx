import React from 'react'

import Sidebar from "../../components/SideNavigation";
import Navbar from "../../components/SharedNavbar"
import EstateHeader from '../../components/EstateHeader';
import Table from '../../components/Table';

function Account() {
  return (
    <div className='dashboard'>
      <Navbar />
      <Sidebar />
      <main className="dashboard__main">

            <EstateHeader />
            <div className="dashboard__main__panel2">
                  <div className="dashboard__main__panel2__left-view">
                        <h2 className="dashboard__main__panel2__right-view__title">
                              Account
                        </h2>
                        
                        <Table />
                  </div>   
            </div>

      </main>

    </div>
  )
}

export default Account