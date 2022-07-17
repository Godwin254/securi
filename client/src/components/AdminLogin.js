import React from 'react'
import '../styles/components/AdminLogin.scss'

function AdminLogin() {
  return (
    <div className="Admin-login">
        <h2>Section for Admin only</h2>
        <p>Provide password to login as the administrator.</p>
        <form>
            <input type="password" placeholder="Enter Admin password"/>
            <input type="submit" value="Enter" />
        </form>
    </div>
  )
}

export default AdminLogin;
