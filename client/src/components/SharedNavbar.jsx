import React from 'react'
import {Link} from 'react-router-dom'

import {BiChevronDown, BiMenu} from 'react-icons/bi'
import {MdOutlineLogin} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import { useGlobalContext } from '../pages/shared'

export function SharedNavbar({firstname, lastname, estateName, userId}) {


  return (
    <div className='flex flex-row shadow-sm bg-white items-center px-16 py-5 mb-3'>
      <p className="bg-gray-100 px-5 py-1 rounded-full">{estateName || "Estate Name Here"}</p>


      <Link to={`/admin/${userId}/edit-profile`} className='flex flex-row items-center ml-auto text-sm font-regular'>
        <AiOutlineUser   className='mr-2 text-2xl' />
        {`${firstname ?? "No"} ${lastname ?? "User"}`}
        <BiChevronDown className='ml-2' />
      </Link> 
     
    </div>
  )
}