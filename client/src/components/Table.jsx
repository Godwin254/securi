import React from 'react'
import {AiOutlinePlus, AiFillDelete} from 'react-icons/ai'
import { MdOutlineFilterList } from 'react-icons/md'
import { useGlobalContext } from '../pages/shared'

export function Table({theads=[], actions=[], data=[]}) {

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
                              {
                                   theads.length > 0 && theads.map((thead, index) => <th key={index}>{thead}</th> )
                              }     
                        </tr>
                  </thead>
                  <tbody>
                        <tr>
                              {
                                    data.length === 0 && <td colSpan={theads.length} className='text-center'>No data available</td>
                              }
                              {
                                    data.length > 0 && data.map((dt, index) => <td key={index}>{dt}</td> )
                              }
                              <td>
                                    {
                                          actions.length > 0 && actions.map((action, index) => <span key={index}>{action}</span> )
                                    }
                              </td>
                        </tr>
                  </tbody>
            </table>
      </>
  )
}