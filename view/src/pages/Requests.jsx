import React from 'react'
import Nav from '../components/AdminNav';
import {useNavigate} from 'react-router-dom';

function Requests({residents}) {

  const navigate = useNavigate();

  return (
    <div className='Requests'>
      <Nav count={residents.length} />
      <div className='Requests__content'>
        <h1>Requests</h1>
        <div className='Requests__content__table'>
          <table>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>House No.</th>
                <th>Vehicle No.</th>
                <th>Request status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                residents.map((resident, index) => {
                  const {_id:id, firstName, lastName, email, houseNo, plateNo, status} = resident;

                  if (status !== "approved"){
                    return (
                      <tr key={id}>
                        <td>{index}</td>
                        <td>{`${firstName} ${lastName}`}</td>
                        <td>{email}</td>
                        <td>{houseNo}</td>
                        <td>{plateNo}</td>
                        <td>{status}</td>
                        <td onClick={() => navigate(`/admin/request/${id}`)}>View details</td>
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


export default Requests;