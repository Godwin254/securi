import React from 'react'
import {AiOutlinePlus, AiFillDelete} from 'react-icons/ai'
import { MdOutlineFilterList } from 'react-icons/md'

export function Table() {
  return (

      <>
            <div className=' bg-white shadow-sm py-3 px-2'>
                  <span className='flex flex-row items-center text-lg'>
                        <MdOutlineFilterList className='mr-3'/>
                        Filter
                  </span>
            </div>
            <table className='dashboard__main__panel2__left-view__table bg-white shadow-sm px-2'>
                  <thead>
                        <tr>
                              <th>Data</th>       
                              <th>Data</th>       
                              <th>Data</th>       
                              <th>Data</th>       
                              <th>Data</th>       
                              <th>Data</th>       
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
      </>
  )
}