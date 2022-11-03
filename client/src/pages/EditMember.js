import React, { useEffect, useState } from 'react'
import Nav from '../components/AdminNav'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditMember() {
    const { userId, memberId } = useParams();
    const navigate = useNavigate();
    const [resident, setResident] = useState({});
    const [member, setMember] = useState({});


    //fetch one member that belongs to Resident
    const fetchMember = async () => {
        const response = await axios.get(`http://localhost:8000/api/residents/${userId}/members/${memberId}`);
        setMember(response.data);
        //console.log(response);
    }
    //fetch resident details from the database
    const fetchResident = async () => {
        const response = await axios.get(`http://localhost:8000/api/residents/${userId}`);
        setResident(response.data);
        //console.log(response);
    }
     

    useEffect(() => {
        fetchResident();
        fetchMember();
    }, [resident]);


    const {firstName, lastName,email, relationship} = member;
    return (
        <div className='EditUser'>
            <Nav />
            <div className='EditUser__content'>
                <div className='EditUser__content__left'>
                    <h1>Authorized User for {resident.firstName}</h1>
                    <div className='EditUser__content__left__info'>
                        <p>Member Name: <span>{`${firstName} ${lastName}`}</span></p>
                        <p>Email: <span>{email}</span></p>
                        <p>Relationship: <span>{relationship}</span></p>
                    </div>
                    <div className='EditUser__content__left__form'>
                        <form>
                            <input type='text' placeholder='Tag ID' />
                            <input type='text' placeholder='Fingerprint ID' />
                            <input type='submit' value="Update Details" />
                        </form>
                    </div>


                </div>

                
            </div>


        </div>
    )
}

export default EditMember