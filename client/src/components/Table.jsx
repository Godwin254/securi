import React from 'react'
import {AiOutlinePlus, AiFillDelete} from 'react-icons/ai'
import { MdOutlineFilterList } from 'react-icons/md'
import { useGlobalContext } from '../pages/shared'

export function Table({tableHeaders=[], actions=[], tableData=[], rowDataKeys=[]}) {

  return (

      <>
            <div className=' bg-white shadow-sm py-3 px-2'>
                  <span className='flex flex-row items-center text-lg'>
                        <MdOutlineFilterList className='mr-3'/>
                        Filter
                  </span>
            </div>
            <table className='dashboard__main__panel2__left-view__table bg-white shadow-sm px-2 overflow-auto'>
                  <thead>
                        <tr>
                              {
                                   tableHeaders.length > 0 && tableHeaders.map((header, index) => <th key={index}>{header}</th> )
                              }     
                        </tr>
                  </thead>
                  <tbody className='max-h-[60vh]'>

                        {
                              tableData.length > 0 && tableData.map((rowData, rowIndex) => (
                                    <tr key={rowIndex}>
                                          {
                                               rowDataKeys.map((key, cellIndex) => <td key={cellIndex}>{rowData[key] || "--"}</td>)
                                          }
                                          {

                                                actions.length > 0 && (
                                                      <td>
                                                            {
                                                                  actions.map((action, actionIndex) => (<span className='px-2 cursor-pointer' key={actionIndex}>{action}</span>) )
                                                            }
                                                      </td>
                                                )
                                          }
                                    </tr>
                              ))
                        }
                  </tbody>
            </table>
      </>
  )
}