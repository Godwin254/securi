import React from 'react'
import {FaUserTag} from 'react-icons/fa';
import { IoFingerPrintOutline } from 'react-icons/io5';

function SecurityGate() {
  const awaiting = true;
  const MEMBERS = [
    {
      firstName: 'John',
      lastName: 'Doe',
      id: '123456789',
      phone: '08012345678',
      relationship: 'Friend',
      image: require('../images/user1.jpg')
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      id: '123456789',
      phone: '08012345678',
      relationship: 'Friend',
      image: require('../images/user1.jpg')
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      id: '123456789',
      phone: '08012345678',
      relationship: 'Friend',
      image: require('../images/user1.jpg')
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      id: '123456789',
      phone: '08012345678',
      relationship: 'Friend',
      image: require('../images/user1.jpg')
    },
  ]

  const image1 = require('../images/car-pro1.jpg');
  const image2 = require('../images/user1.jpg');

  return (
    <div className='Security'>
      <div className='Security__left-container'>

        <div className='Security__left-container__title'>
          <h1>Awaiting Scan...</h1>
        </div>

        <div className='Security__left-container__scan'>
          <div className='Security__left-container__scan__tag'>
            <FaUserTag className='i'/>
          </div>

          <div className='Security__left-container__scan__tag'>
            <IoFingerPrintOutline className='i'/>
          </div>
          
        </div>
      </div>

      <div className='Security__right-container'>
        <div className='Security__right-container__user'>
          <img src={image2} alt='user-image' width='200px'  />
          <div className='Security__right-container__user__details'>
            <h1>John Doe</h1>
            <p>Resident</p>
            <p>House Number <span>{"B 405"}</span></p>
          </div>

        </div>

        <div className='Security__right-container__vehicle'>
          <img src={image1} alt='vehicle-image' width='200px' />
          <div className='Security__right-container__vehicle__details'>
            <h1>Toyota Camry</h1>
            <p>Plate Number <span>{"KCA 1234"}</span></p>
            <p>Model <span>{"2019"}</span></p>
            <p>Color <span>{"Black"}</span></p>
          </div>
        </div>
        <div className='Security__right-container__members'>
          {
            MEMBERS.map((member, index) => {

              const {firstName, lastName,  relationship, image} = member;
              return (
                <div className='Security__right-container__members__member' key={index}>
                  <img src={image} alt='member-image' width='200px' />
                  <div className='Security__right-container__members__member__details'>
                    <h1>{firstName} {lastName}</h1>
                    <p>Relationship: <span>{relationship}</span></p>
                  </div>
                </div>
              )

            })
          }
          

        </div>

        
      </div>

    </div>
  )
}

export default SecurityGate;