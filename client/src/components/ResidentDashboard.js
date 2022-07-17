import React from 'react'
import '../styles/components/UserDashboard.scss'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//resident dashboard
const ResidentDashboard = () => {

    return (
        <div className="resident-dash">
            <Navbar username="John Doe" />
            <div className='content'>

                <div className='resident-navs'>
                    <div className='nav'>
                        <FontAwesomeIcon icon="fa-solid fa-people-group" />
                        <h5>Manage Members</h5>
                    </div>
                    <div className='nav'>
                       
                        <h5>Access History</h5>
                    </div>
                    <div className='nav'>
                       
                        <h5>Account Settings</h5>
                    </div>
                </div>

                <div className='sections'>
                    <div className='sectionA'>
                        <h2>Add New Member</h2>
                        <form>
                            <input type="text" placeholder='Enter  username' />
                            <input type="text" placeholder='Enter  identification' />
                            <input type="text" placeholder='Enter  phone number' />
                            <input type="password" placeholder='Enter your password' />
                            <input type="submit" value="ADD USER" />
                        </form>
                        
                    </div>
                    <div className='sectionB'>
                        <h2>Your Users List ({2})</h2>
                        <div className='users'>
                            <div className='user'>
                                <img src='assets/images/user1.jpg' alt='User Profile' width='100px' />
                                <div>
                                    <h5>Tina Doe</h5>
                                    <h6>{1234657768}</h6>
                                    <span>{"Relationship"}</span>
                                </div>
                                <div className='btns'>
                                    <input type="button" value="Edit" />
                                    <input type="button" value="Delete" />
                                </div>
                            </div>
                            <div className='user'>
                                <img src='assets/images/user1.jpg' alt='User Profile' width='100px' />
                                <div>
                                    <h5>Tina Doe</h5>
                                    <h6>{1234657768}</h6>
                                    <span>{"Relationship"}</span>
                                </div>
                                <div className='btns'>
                                    <input type="button" value="Edit" />
                                    <input type="button" value="Delete" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default ResidentDashboard;