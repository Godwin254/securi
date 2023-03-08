import React from 'react'
import {AiOutlinePlus, AiFillDelete} from 'react-icons/ai'

function Table() {
  return (
      <table className='dashboard__main__panel2__left-view__table'>
            <thead>
                  <tr>
                        <th>Name</th>
                        <th>Car ID</th>
                        <th>House No.</th>
                        <th>Time</th>
                        <th>Accessed By</th>
                        <th>Actions</th>
                  </tr>
            </thead>
            <tbody>
                  <tr>
                        <td>John Doe</td>
                        <td>KCV 144V</td>
                        <td>House 408</td>
                        <td>1100hrs</td>
                        <td>Owner</td>
                        <td>
                              <AiFillDelete />
                        </td>
                  </tr>
                  <tr>
                        <td>John Doe</td>
                        <td>KCV 144V</td>
                        <td>House 408</td>
                        <td>1100hrs</td>
                        <td>Unkwown</td>
                        <td>
                              <AiFillDelete />
                        </td>
                  </tr>
                  <tr>
                        <td>John Doe</td>
                        <td>KCV 144V</td>
                        <td>House 408</td>
                        <td>1100hrs</td>
                        <td>Owner</td>
                        <td>
                              <AiFillDelete />
                        </td>
                  </tr>
                  
                  

            </tbody>
      </table>
  )
}

export default Table