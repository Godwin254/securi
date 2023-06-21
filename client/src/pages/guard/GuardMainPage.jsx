import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

import { MdPowerSettingsNew } from 'react-icons/md';
import { FaUserTag, FaUserAlt, FaCarAlt } from 'react-icons/fa';
import { IoFingerPrintOutline } from 'react-icons/io5';
import {toast} from 'react-toastify';
import { logoutUser } from '../../services/AuthService';
import { getDateFormat, getLocalStorageItem } from '../../utils/utils';
import { getEstateById } from '../../services/EstateServices';

export function GuardMainPage() {
  const [estate, setEstate] = useState({estateName: "Dummy Estate", location: "Dummy Location"})
  const user = { vehicle: {}, members: []}
  const {estateId} = JSON.parse(getLocalStorageItem("authData"));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEstateById(estateId)
      setEstate(data);
    }
    fetchData();

    return () => {

    }
  }, [])

  const handleOpenGate = (e) => {

    if(!user){
      toast.info("There is no user to open the gate for!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000});
      return;
    }
    toast.success("Gate starting to open...", { position: toast.POSITION.TOP_CENTER, autoClose: 2000});
  }


  const handleGuardLogout =  (e) => {
    logoutUser()
    toast.info("You have logged out successfully!!", { position: toast.POSITION.TOP_CENTER});
  }

  const {name, house, vehicle, approved, members} = user;
  return (
    <div className="main-page">
      <header className="page-header">
        <h2 className="header-text">SECURI</h2>
        <p className="text estate-tag">{estate.estateName || "No Esate Config"}</p>

        <span className="sub-title">
          {getDateFormat('string')}
          <MdPowerSettingsNew className="icon cursor-pointer text-2xl" onClick={handleGuardLogout}/>
        </span>
      </header>

      <div className="page-body">
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
              members.length > 0 
                ? members.map( (member, i) => <p key={i} className={`member-list ${member.access ? 'selected-member' : null}`}>{i+1}. {member.name} | {member.rel}</p>)
                : <p className="stroke-left">No members</p>
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
