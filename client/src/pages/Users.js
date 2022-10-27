import React from 'react'
import Nav from '../components/AdminNav';
import {useNavigate} from 'react-router-dom';

function Users() {
    const navigate = useNavigate();
    const Users = [
        {
            id: 1,
            name: 'John Doe',
            houseNo: 'A 507',
            license: 'KCZ 300A',
            status: 'Active'
        },
        {
            id: 2,
            name: 'John Doe',
            houseNo: 'B 401',
            license: 'KCZ 300A',
            status: 'Active'
        },
        {
            id: 3,
            name: 'John Doe',
            houseNo: 'C 201',
            license: 'KCZ 300A',
            status: 'Active'
        },
    ];

    console.log(Users)

    return (
        <div className='Requests'>
            <Nav />
            <div className='Requests__content'>
                <h1>Manage Users</h1>
                <div className='Requests__content__table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Resident ID</th>
                                <th>Resident Name</th>
                                <th>House No</th>
                                <th>Request Status</th>
                                <th>License No </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Users.map((user) => {
                                    const { id, name, houseNo, license, status } = user;
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{houseNo}</td>
                                            <td>{status}</td>
                                            <td>{license}</td>
                                            <button onClick={() => navigate(`/admin/dashboard/Edit/${name}`)}>Edit</button>
                                            <button>Remove</button>
                                        </tr>
                                    )
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