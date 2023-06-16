import './App.scss';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ProtectedRoutes } from './auth/ProtectedRoutes';

import { AddNewMemberDialog } from './components';

//shared
import { LandingPage, Login, Signup, ErrorHandler, Registrations } from './pages/shared';

//admin
import {
  AdminDashboard,
  AdminAccessHistory,
  AdminManageResidents,
  AdminManageDevices,
  AdminSettings,
} from './pages/admin';

//resident
//import { ClientDashboard, ClientAccessHistory, ClientManageDevices, ClientManageMembers, ClientSettings } from './pages/resident'

//Guard
import { GuardMainPage } from './pages/guard'

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Registrations />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/app/:role/create-estate" element={<Registrations />} />
        <Route path="/app/:role/configure-info" element={<Registrations />} />

        <Route path="/app/admin/" element={<ProtectedRoutes />}>
          <Route path="/app/admin/" element={<Navigate replace to="dashboard" />} />
          <Route path="/app/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/app/admin/manage-residents" element={<AdminManageResidents />} />
          <Route path="/app/admin/manage-devices" element={<AdminManageDevices />} />
          <Route path="/app/admin/access-history" element={<AdminAccessHistory />} />
          <Route path="/app/admin/settings" element={<AdminSettings />} />
        </Route>
        {/*
        ************  RESIDENT ROUTES  ************
        <Route path='/app/resident' element={<ProtectedRoutes />} >
          <Route path='/app' element={<ClientDashboard />} />
          <Route path='/app/manage-members' element={<ClientManageMembers />} />
          <Route path='/app/manage-devices' element={<ClientManageDevices />} />
          <Route path='/app/access-history' element={<ClientAccessHistory />} />
          <Route path='/app/settings' element={<ClientSettings />} />
        </Route>   */}

        <Route path='/app/gate/:estateId' element={<ProtectedRoutes />} >
          <Route path="/app/gate/:estateId" element={<GuardMainPage />} />
        </Route>

        <Route path="*" element={<ErrorHandler />} />
      </Routes>
    </div>
  );
}

export default App;
