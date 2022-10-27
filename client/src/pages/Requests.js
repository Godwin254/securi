import React from 'react'
import Nav from '../components/AdminNav';
import {useNavigate} from 'react-router-dom';

function Requests() {

  const navigate = useNavigate();
  const Requests = [
    {
      id: 1,
      name: 'John Doe',
      type: 'Visitor',
      date: '2021-01-01',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Janet Twain',
      type: 'Visitor',
      date: '2021-01-01',
      status: 'Pending'
    },
    {
      id:3,
      name: 'Winstone',
      type: 'Visitor',
      date: '2021-01-01',
      status: 'Pending'
    },
  ];

  return (
    <div className='Requests'>
      <Nav count={Requests.length} />
      <div className='Requests__content'>
        <h1>Requests</h1>
        <div className='Requests__content__table'>
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Request Type</th>
                <th>Request Date</th>
                <th>Request Status</th>
                <th>Request Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Requests.map((request) => {
                  const {id, name, type, date, status} = request;
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{type}</td>
                      <td>{date}</td>
                      <td>{status}</td>
                      <td>{name}</td>
                      <button onClick={() => navigate(`/admin/dashboard/request/${name}`) }>View details</button>
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


export default Requests;