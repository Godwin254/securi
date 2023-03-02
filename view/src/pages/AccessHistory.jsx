import React from 'react'
import Nav from '../components/AdminNav';

function AccessHistory() {
    const Access = [
        {
            id: 1,
            owner: 'John Doe',
            member: 'Son',
            license: 'KCZ 300A',
            time: '3:00pm',
            status: 'Failed'
        },
        {
            id: 2,
            owner: 'John Doe',
            member: 'Son',
            license: 'KCZ 300A',
            time: '3:00pm',
            status: 'Failed'
        },
        {
            id: 3,
            owner: 'Tina Doe',
            member: '--',
            license: 'KCZ 300A',
            time: '5:00pm',
            status: 'Passed'
        },
    ];
  return (
    <div className="Access">
        <Nav />
          <div className='Requests__content'>
              <h1>Access History</h1>
              <div className='Requests__content__table'>
                  <table>
                      <thead>
                          <tr>
                              <th>Tag ID</th>
                              <th>Owner</th>
                              <th>Member</th>
                              <th>Access Time</th>
                              <th>License plate</th>
                              <th>Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              Access.map((data) => {
                                  const { id, owner, member, license, status, time } = data;
                                  return (
                                      <tr key={id}>
                                          <td>{id}</td>
                                          <td>{owner}</td>
                                          <td>{member}</td>
                                          <td>{time}</td>
                                          <td>{license}</td>
                                          <td>{status}</td>
                
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

export default AccessHistory