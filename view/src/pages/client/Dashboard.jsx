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
                        <table className='dashboard__main__panel2__left-view__table'>
                              <thead>
                                    <tr>
                                          <th>Name</th>
                                          <th>Car ID</th>
                                          <th>House No.</th>
                                          <th>Time</th>
                                          <th>Accessed By</th>
                                          <th>Actions</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <td>John Doe</td>
                                          <td>KCV 144V</td>
                                          <td>House 408</td>
                                          <td>1100hrs</td>
                                          <td>Owner</td>
                                          <td>
                                                <AiFillDelete />
                                          </td>
                                    </tr>
                                    <tr>
                                          <td>John Doe</td>
                                          <td>KCV 144V</td>
                                          <td>House 408</td>
                                          <td>1100hrs</td>
                                          <td>Unkwown</td>
                                          <td>
                                                <AiFillDelete />
                                          </td>
                                    </tr>
                                    <tr>
                                          <td>John Doe</td>
                                          <td>KCV 144V</td>
                                          <td>House 408</td>
                                          <td>1100hrs</td>
                                          <td>Owner</td>
                                          <td>
                                                <AiFillDelete />
                                          </td>
                                    </tr>
                                     
                                    

                              </tbody>
                        </table>

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