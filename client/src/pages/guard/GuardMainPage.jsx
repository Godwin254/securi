import React, {useState} from 'react';

import { MdPowerSettingsNew } from 'react-icons/md';
import { FaUserTag, FaUserAlt, FaCarAlt } from 'react-icons/fa';
import { IoFingerPrintOutline } from 'react-icons/io5';

import { AlertBox } from '../../components';

export function GuardMainPage() {

  const [alert, setAlert] = useState(null);

  const estateConfig = {
    eid: "112345678",
    name: "Jacaranda Villa Estate",
    date: new Date().toDateString()
  }
  const user = {
    name: "Lelit Brenda",
    house: 'House B107',
    approved: true,
    vehicle: {
      type: "Mazda CX5",
      make: "2016",
      color: "Maroon",
      plate: "KCY 001V"
    },
    members: [
      {
        name: "Winstone Owen",
        rel: "son",
        phone: "0712345678",
        access: true
      },
      {
        name: "Jane Doe",
        rel: "friend",
        phone: "0712345678",
        access: false
      },
      {
        name: "Tina Atieno",
        rel: "wife",
        phone: "0712345678",
        access: false
      },
    ]
    
  };

  const handleOpenGate = (e) => {

    if(!user){
      setAlert({type: 'warning', text: 'There is no user to open the gate for!'})

      return;
    }

    setAlert({type: 'success', text: 'Gate starting to open...'})

    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }


  const handleSecurityLogout = (e) => {
    setAlert({type: 'info', text: 'You have logged out successfully!!'})
  }

  const {name, house, vehicle, approved, members} = user;
  return (
    <div className="main-page">
      <header className="page-header">
        <h2 className="header-text">SECURI</h2>
        <p className="text estate-tag">{estateConfig.name}</p>

        <span className="sub-title">
          {estateConfig.date}
          <MdPowerSettingsNew className="icon" onClick={handleSecurityLogout}/>
        </span>
      </header>

      <div className="page-body">
        {
          alert && <AlertBox type={alert.type} text={alert.text}/>
        }
        <div className="scanner">
          <div className={`scanner-card ${  user ? 'scale-in-out' : null}`}>
            <FaUserTag className="icon" />
          </div>
          <div className={`scanner-card ${ user ? 'scale-in-out' : null}`}>
            <IoFingerPrintOutline className="icon" />
          </div>
        </div>
        <div className="details">
          <div className="section">
            <h1 className="title">
              <FaUserAlt className="icon" />
              {name || '--'}
            </h1>
            <span className="info-tag">{approved ? 'Resident' : 'Awaiting scan...'}</span>
            <p >{house || '--'}</p>
          </div>
          <div className="section">
            <h1 className="title">
              <FaCarAlt className="icon" />
              Vehicle
            </h1>
            <p>Type: {vehicle.type || '--'}</p>
            <p>Make: {vehicle.make || '--'}</p>
            <p>Color: {vehicle.color || '--'}</p>
            <p className="stroke-left">{vehicle.plate  || '--'}</p>
          </div>
          <div className="section">
            <h1 className="title">
              <FaUserAlt className="icon" />
              Members
            </h1>
            {
              members.map( (member, i) => <p key={i} className={`member-list ${member.access ? 'selected-member' : null}`}>{i+1}. {member.name} | {member.rel}</p>)
            }
          </div>
          <button 
            className={user ? 'btn-enabled' : 'btn-disabled'}
            onClick={handleOpenGate}
          >
            open gate
          </button>
        </div>
      </div>
    </div>
  );
}
