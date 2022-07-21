import React from 'react'
import '../styles/components/UserDashboard.scss'
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Routes, Route, Link} from 'react-router-dom'
//resident dashboard
const ResidentDashboard = () => {

    const users = [
        {
            id: 1,
            username: 'John Doe',
            phone: +254712345578,
            relationship: 'Cousin',
            image: 'assets/ images / user1.jpg',
            password: 'qwerty',
            fingerID: 12,
            members: [
                {
                    id: 1,
                    name: "John Doe",
                    img: "some image",
                    fingerID: '',
                    relationship: 'Cousin',
                }
            ]
        },
        {
            id: 2,
            username: 'Tina Doe',
            phone: +25471265338,
            relationship: 'Daughter'
        },
        {
            id: 3,
            username: 'William Doe',
            phone: +2547578745578,
            relationship: 'Father'
        },
        {
            id: 3,
            username: 'William Doe',
            phone: +2547578745578,
            relationship: 'Father'
        },
         {
            id: 3,
            username: 'William Doe',
            phone: +2547578745578,
            relationship: 'Father'
        }
    ];

    console.log(users[0].image)

    return (
        <div className="resident-dash">
            <Navbar username="John Doe" />
            <div className='content'>

                <div className='resident-navs'>
                    <Link to='/manage-members'>
                        <div className='nav'>
                            <FontAwesomeIcon icon="fa-solid fa-people-group" />
                            <h5>Manage Members</h5>
                        </div>
                    </Link>

                    <Link to='/access-history'>
                        <div className='nav'>
                        
                            <h5>Access History</h5>
                        </div>
                    </Link>

                    <Link to='/account-settings'>
                        <div className='nav'>
                        
                            <h5>Account Settings</h5>
                        </div>
                    </Link>
                </div>
                <div>
                    <ManageUsers users={users} />
                    <Routes>
                        <Route path="/manage-members" element={<ManageUsers users={users} />} />
                        <Route path="/access-history" element={<AccessHistory />} />
                        <Route path="/account-settings" element={<AccountSetting />} />
                    </Routes>
                </div>

            </div>

            <Footer />
        </div>
    );
}

// user navigations
const ManageUsers = ({users}) => {

    return (
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
                <h2>Your Users List ({users.length})</h2>
                <div className='users'>
                    {
                        users.map(({ username, phone, relationship, image }) => (

                            <div className='user'>
                                <img src='assets/images/user1.jpg' alt='User Profile' width='100px' />
                                <div>
                                    <h5>{username}</h5>
                                    <h6>{phone}</h6>
                                    <span>{relationship}</span>
                                </div>
                                <div className='btns'>
                                    <input type="button" value="Edit" />
                                    <input type="button" value="Delete" />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

const AccessHistory = () => {

    return (
        <div style={{ textAlign: "center" }}>
            <h3>Access History list</h3>
        </div>
    );
}

const AccountSetting = () => {

    return (
        <div style={{textAlign: "center"}}>
            <h3>Account Settings</h3>
        </div>
    );
}

export default ResidentDashboard;