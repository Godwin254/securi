import React, {useState, useEffect} from 'react'
import Nav from '../components/AdminNav';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function RequestDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [resident, setResident] = useState({});
    const [approved, setApproved] = useState(false);


    //console.log(id)

    //fetch resident details from the database
    const fetchResident = async () => {
        const response = await axios.get(`http://localhost:8000/api/residents/${id}`);
        setResident(response.data);
        //console.log(response);
    }


    useEffect(() => {
        fetchResident();
    }, {resident});

    //console.log("resident",resident);
    //console.log("members",members);
    const handleApprove = async () => {
        const response = await axios.patch(`http://localhost:8000/api/residents/${id}`, {
            status: "approved"
        });
        setApproved(true);
        
        if(response.status === 200){
            console.log("success");
            //navigate('/admin/manage-users');
        }
    }

    const {firstName, lastName, plateNo, email, houseNo, status} = resident;
  return (
    <div className="Request-details">
        <Nav />
        <div className="Request-details__content">
            {approved && <span> Successfully Approved! </span>}
            <h1>Resident Details</h1>
            <div className="Request-details__content__info">
                <p>Resident Name: <span>{`${firstName} ${lastName}`}</span></p>
                <p>Email Address: <span>{email}</span></p>
                <p>House No: <span>{houseNo}</span></p>
                <p>License No: <span>{plateNo}</span></p>
                <p>Request Status: <span>{status}</span></p>
            </div>
            <div className="Request-details__content__actions">
                <button onClick={() => navigate('/admin/requests') }>Back</button>
                <button onClick={handleApprove}>Approve</button>
            </div>
        </div>

    </div>
  )
}

export default RequestDetails