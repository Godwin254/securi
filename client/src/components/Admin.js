import React from 'react'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'

export default function () {
    const isLoggedIn = false;
  return (
    <>
        {
            isLoggedIn ? <AdminDashboard /> : <AdminLogin />
        }
    </>
  )
}
