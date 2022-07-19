import React from 'react'
import AdminLogin from '../components/AdminLogin'
import AdminDashboard from '../components/AdminDashboard'

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
