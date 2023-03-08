import React from 'react'

import {AiOutlinePlus, AiFillDelete} from 'react-icons/ai'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import Sidebar from "../../components/SideNavigation";
import Navbar from "../../components/SharedNavbar"
import EstateHeader from '../../components/EstateHeader';
import Table from '../../components/Table';

function Dashboard() {
      
  return (
    <div className='dashboard'>
      <Navbar />
      <Sidebar />
      <main className="dashboard__main">

            <EstateHeader />
            <div className="dashboard__main__panel2">
                  <div className="dashboard__main__panel2__left-view">
                        <h2 className="dashboard__main__panel2__right-view__title">
                              Acccess Logs
                        </h2>
                        
                        <Table />


                  </div>

                  <div className="dashboard__main__panel2__right-view">
                        <h2 className="dashboard__main__panel2__right-view__title">
                              Actions
                        </h2>
                        <div className="dashboard__main__panel2__right-view__cards">
                              <div className="dashboard__main__panel2__right-view__cards__card">
                                    <AiOutlinePlus className="dashboard__main__panel2__right-view__cards__card__icon" />
                                    <h5>Add Member</h5>
                              </div>
                              <div className="dashboard__main__panel2__right-view__cards__card">
                                    <AiOutlinePlus className="dashboard__main__panel2__right-view__cards__card__icon" />
                                    <h5>Add Member</h5>
                              </div>
                              <div className="dashboard__main__panel2__right-view__cards__card">
                                    <AiOutlinePlus className="dashboard__main__panel2__right-view__cards__card__icon" />
                                    <h5>Add Member</h5>
                              </div>
                              <div className="dashboard__main__panel2__right-view__cards__card">
                                    <AiOutlinePlus className="dashboard__main__panel2__right-view__cards__card__icon" />
                                    <h5>Add Member</h5>
                              </div>
                        </div>
                  </div>
                 
            </div>

      </main>


    </div>
  )
}

export default Dashboard