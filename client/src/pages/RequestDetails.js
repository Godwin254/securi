import React from 'react'
import Nav from '../components/AdminNav';
import {useParams, useNavigate} from 'react-router-dom';

function RequestDetails() {
    const {name} = useParams();
    const navigate = useNavigate();
  return (
    <div className="Request-details">
        <Nav />
        <div className="Request-details__content">
            <span> Successfully Approved! </span>
            <h1>Resident Details</h1>
            <div className="Request-details__content__info">
                <p>Resident Name: <span>{name}</span></p>
                <p>Resident ID: <span>{"1"}</span></p>
                <p>House No: <span>{"A 507"}</span></p>
                <p>License No: <span>{"KCZ 300A"}</span></p>
                <p>Request Status: <span>{"Pending"}</span></p>
            </div>
            <div className="Request-details__content__actions">
                <button onClick={() => navigate('/admin/dashboard') }>Back</button>
                <button>Approve</button>
            </div>
        </div>

    </div>
  )
}

export default RequestDetails