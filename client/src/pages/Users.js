import React,{useState}  from 'react'
import Nav from '../components/AdminNav';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Users({residents}) {
    const navigate = useNavigate();
    const [info, setInfo] = useState(false);
    const [success, setSuccess] = useState('');

    const handleDelete = async (e) => {
        console.log(e.target.id);

       const res =  await axios.delete(`/api/residents/${e.target.id}`);

       //status 200
       if (res.status === 200) {
            navigate('/admin/manage-users');
            setInfo(true);
            setSuccess('User is deleted!');
       }
    }

    return (
        <div className='Requests'>
            <Nav />
            <div className='Requests__content'>
                {info && <span> {success} </span>}
                <h1>Manage Users</h1>
                <div className='Requests__content__table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Resident ID</th>
                                <th>Resident Name</th>
                                <th>House No</th>
                                <th>Vehicle</th>
                                <th>Status</th>
                                <th>Members</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                residents.map((resident, index) => {
                                    const { _id: id, firstName, lastName, houseNo, plateNo, status } = resident;

                                    if (status === "approved") {
                                        return (
                                            <tr key={id}>
                                                <td>{index}</td>
                                                <td>{`${firstName} ${lastName}`}</td>
                                                <td>{houseNo}</td>
                                                <td>{plateNo}</td>
                                                <td>{status}</td>
                                                <td onClick={ () => navigate(`/admin/edit-member/${id}`) }>View members</td>
                                                <button onClick={() => navigate(`/admin/Edit/${id}`)}>Edit</button>
                                                <button id={id} onClick={handleDelete}>Remove</button>
                                            </tr>
                                        )
                                    }
                                    
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='Requests__content__controls'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    )
}



export default Users