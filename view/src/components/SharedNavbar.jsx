import React, {useState} from 'react'

import {BiChevronDown, BiMenu} from 'react-icons/bi'
import {MdOutlineLogin} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'

function SharedNavbar() {

      const [text, setText] = useState('');

      const handleSearch = (e) => {
            //search implementation
      }

  return (
    <div className='shared'>
      <h5 className='shared__title'>
            <BiMenu  className='shared__title__icon'/>
            {"Dashboard"}
      </h5>

      <input 
            type="text"
            name='search'
            placeholder='Search here'
            className='shared__input'
            autoComplete='off'
            onChange={(e) => setText(e.target.value)}
            value={text}
      />

      <a to='/login' className='shared__icon'>
            <AiOutlineUser   className='shared__icon__btn circle' />
            Admin
            <BiChevronDown className='shared__icon__btn' />
      </a> 
    </div>
  )
}

export default SharedNavbar