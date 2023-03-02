import React from 'react'
import {useNavigate, Link} from 'react-router-dom';

function UserNav() {

    const navigate = useNavigate();
  return (
    <div className="UserNav">
        <h2>Welcome, User</h2>
        <Link to='/'>Manage members</Link>
        <Link to='/'>Access history</Link>
        <Link to='/'>Home</Link>
        <div className="UserNav__user-profile">
            <img src="image" alt="user" />
            <span>Logout</span>
        </div>
    </div>
  )
}

export default UserNav