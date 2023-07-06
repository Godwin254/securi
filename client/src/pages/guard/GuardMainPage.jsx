import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

import { MdPowerSettingsNew } from 'react-icons/md';
import { FaUserTag, FaUserAlt, FaCarAlt } from 'react-icons/fa';
import { IoFingerPrintOutline } from 'react-icons/io5';
import {toast} from 'react-toastify';
import { logoutUser } from '../../services/AuthService';
import { getDateFormat, getLocalStorageItem } from '../../utils/utils';
import { getEstateById } from '../../services/EstateServices';
import { backendAPI } from '../../utils/constants';
import { getUserDetails } from '../../services/AuthService';

export function GuardMainPage() {
  const [estate, setEstate] = useState({estateName: "Dummy Estate", location: "Dummy Location"})
  //const user = { vehicle: {}, members: []}
  const [user, setUser] = useState({ vehicle: {}, members: []});
  const [fingerprint, setFingerprintId] = useState("");
  const {estateId} = JSON.parse(getLocalStorageItem("authData"));

  useEffect(() => {

    //socket connection
    const socket = io(`${backendAPI}`, {transports: ['websocket']});
    socket.on('connect', () => {
      console.log('Socket connected to server');
    });

    socket.on('accessTag', async(data) => {
      const {residentId} = data;
      //get user data via id from data
      const userData = await getUserDetails(residentId, "user");
      setUser(userData);
      socket.emit('residentiId', residentId);
      toast.success(`Vehicle Owner: ${userData.firstname}`, { position: toast.POSITION.TOP_CENTER});
    })

    socket.on('accessFingerprint', async(data) => {

      const {firstname, lastname, referenceType, fingerprintId} = data;
      setFingerprintId(fingerprintId);
      toast.success(`Vehicle Accessed By: ${firstname} ${lastname} --> ${referenceType} `, { position: toast.POSITION.TOP_CENTER, autoClose: 3000});
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected from server');
    });

    const fetchData = async () => {
      const data = await getEstateById(estateId)
      setEstate(data);
    }
    fetchData();

    return () => {
      socket.disconnect();
    }
  }, [])

  const handleOpenGate = (e) => {

    if(!user){
      toast.info("There is no user to open the gate for!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000});
      return;
    }
    toast.success("Gate starting to open...", { position: toast.POSITION.TOP_CENTER, autoClose: 2000});

    //set user to null
    setUser({ vehicle: {}, members: []});
    setFingerprintId("");
  }


  const handleGuardLogout =  (e) => {
    logoutUser()
    toast.info("You have logged out successfully!!", { position: toast.POSITION.TOP_CENTER});
  }

  const {firstname, lastname, house, vehicle, members} = user;
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
          <div className={`scanner-card ${  !user.uid ? 'scale-in-out' : null} flex-col`}>
            <FaUserTag className="icon" />
            {
              user.uid ? "Tag scanned!" : 'Awaiting scan...'
            }
          </div>
          <div className={`scanner-card ${ !fingerprint ? 'scale-in-out' : null} flex-col`}>
            <IoFingerPrintOutline className="icon" />
            {
              fingerprint ? "Fingerprint scanned!" : 'Awaiting scan...'
            }
          </div>
        </div>
        <div className="details">
          <div className="section">
            <h1 className="title">
              <FaUserAlt className="icon" />
              {
                user.uid ? `${firstname} ${lastname}` : '--'
              }
            </h1>
            <span className="info-tag">{user.uid ? 'Resident' : 'Awaiting scan...'}</span>
            <p > <b>House: </b>{house || '--'}</p>
          </div>
          <div className="section">
            <h1 className="title">
              <FaCarAlt className="icon" />
              Vehicle
            </h1>
            <p>Model: {vehicle.model || '--'}</p>
            <p>Make: {vehicle.make || '--'}</p>
            <p>Color: {vehicle.color || '--'}</p>
            <p className="stroke-left">{vehicle.numberplate  || '--'}</p>
          </div>
          <div className="section">
            <h1 className="title">
              <FaUserAlt className="icon" />
              Members
            </h1>
            {
              members.length > 0 
                ? members.map( (member, i) => <p key={i} className={`member-list ${fingerprint === member.fingerprintId ? 'selected-member' : null}`}>{i+1}. {`${member.firstname} ${member.lastname}`} | {member.relationship}</p>)
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
