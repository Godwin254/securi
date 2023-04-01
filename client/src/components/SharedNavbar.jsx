import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import {BiChevronDown, BiMenu} from 'react-icons/bi'
import {MdOutlineLogin} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'

function SharedNavbar() {

      const [text, setText] = useState('');

      const handleSearch = (e) => {
            //search implementation
      }

  return (
    <div className='shared page-header'>
      <h2 className="header-text">SECURI</h2>
      <p className="text estate-tag">{"Jacaranda Villa Estate"}</p>


      <span>
            <Link to='/auth/login' className='shared__icon'>
                  <AiOutlineUser   className='shared__icon__btn circle' />
                  Admin
                  <BiChevronDown className='shared__icon__btn' />
            </Link> 
      </span>
    </div>
  )
}

export default SharedNavbar