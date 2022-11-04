import React, {useEffect, useState} from 'react'
import Nav from '../components/AdminNav'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function EditUser() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);
    const [resident, setResident] = useState({});
    const [fingerID, setFingerId] = useState('');
    const [tagID, setTagId] = useState('');
    const [updated, setUpdated] = useState(false);

    //fetch resident members from the database
    const fetchMembers = async () => {
        const response = await axios.get(`/api/residents/${id}/members`);
        setMembers(response.data);
    }

    //fetch resident details from the database
    const fetchResident = async () => {
        const response = await axios.get(`/api/residents/${id}`);
        setResident(response.data);
        //console.log(response);
    }

    const handleDetailsUpdate = async (e) => {
        e.preventDefault();
        const response = await axios.patch(`/api/residents/${id}`, {
            fingerID,
            tagID
        });
        if(response.status === 200){
            console.log("success");
            setUpdated(true);

            //clear the form
            setFingerId('');
            setTagId('');
        }
    }

    useEffect(() => {
        fetchMembers();
        fetchResident();
    }, [members]);

    const { firstName, lastName, plateNo, email, houseNo, status } = resident;
  return (
    <div className='EditUser'>
        <Nav />
        <div className='EditUser__content'>
            <div className='EditUser__content__left'>
                {updated && <span>  Resident details updated! </span>}
                <h1>Edit Resident</h1>
                <div className='EditUser__content__left__info'>
                    <p>Resident Name: <span>{`${firstName} ${lastName}`}</span></p>
                    <p>Email: <span>{email}</span></p>
                    <p>House No: <span>{houseNo}</span></p>
                    <p>License No: <span>{plateNo}</span></p>
                    {
                        updated && <p>Finger ID: <span>{resident.fingerID}</span></p> 
                    }
                    {
                        updated && <p>Tag ID: <span>{resident.tagID}</span></p>
                    }
                    <p>Status: <span>{status}</span></p>
                </div>
                <div className='EditUser__content__left__form'>
                    <form onSubmit={handleDetailsUpdate}>
                        <input
                            type='text'
                            placeholder='Tag ID'
                            value={tagID}
                            onChange={(e) => setTagId(e.target.value)}
                        />
                        <input 
                            type='text' 
                            placeholder='Fingerprint ID'
                            value={fingerID}
                            onChange={(e) => setFingerId(e.target.value)} 
                        />
                        <input 
                            type='submit' 
                            value="Update Details"
                            disabled={!tagID || !fingerID}
                        />
                    </form>
                </div>
                

            </div>

            <div className='EditUser__content__right'>
                <h1>
                    Members <span>(
                        {
                            members.length ? `${members.length}` : 'None'
                        })</span>
                </h1>
                <div className='EditUser__content__right__members'>
                    {
                        members.map(member => (
                            <div className='EditUser__content__right__members__member' key={member._id} >
                                <p>Member Name: <span>{member.firstName} {member.lastName}</span></p>
                                <p>Member ID: <span>{member._id}</span></p>
                                <p>Mobile: <span>{member.mobile}</span></p>
                                <p> Relationship: <span>{member.relationship}</span></p>
                
                            </div> 
                        ) )
                    }
                </div>
            </div>
        </div>


    </div>
  )
}

export default EditUser