import React from 'react'
import Nav from '../components/AdminNav'
import {useParams, useNavigate} from 'react-router-dom';

function EditUser() {
    const {name} = useParams();
    const navigate = useNavigate();
  return (
    <div className='EditUser'>
        <Nav />
        <div className='EditUser__content'>
            <h1>Edit User</h1>
            <div className='EditUser__content__info'>
                <p>Resident Name: <span>{name}</span></p>
                <p>Resident ID: <span>{"1"}</span></p>
                <p>House No: <span>{"A 507"}</span></p>
                <p>License No: <span>{"KCZ 300A"}</span></p>
            </div>
            <div className='EditUser__content__form'>
                <form>
                    <input type='text' placeholder='Tag ID' />
                    <input type='text' placeholder='Fingerprint ID' />
                    <input type='submit' value="Update Details"/>
                </form>
            </div>
        </div>


    </div>
  )
}

export default EditUser