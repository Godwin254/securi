import React from 'react'
import {AiOutlinePlus, AiFillDelete} from 'react-icons/ai'

function Table({theads}) {
  return (
      <table className='dashboard__main__panel2__left-view__table'>
            <thead>
                  <tr>
                        {
                              theads.map((thead, i) =>  <th key={i}>{thead}</th> ) 
                        }           
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