import React, {useState} from 'react'

import {CiSquareRemove} from 'react-icons/ci'
import {GrFormAdd} from 'react-icons/gr'

export const RegisterEstateForm = ({onsubmit, title, btnText}) => {

      const [dialog, setDialog] = useState(false)
      const [houses, setHouses] = useState([])


      const handleImageChange = (e) => {

      }

      const toggleDialog = () => {
            setDialog(!dialog);
      }

      const handleSaveNewHouse = (open,home) => {
            setDialog(open)
            setHouses([...houses, home]);
      }

      const handleDeleteHouseItem = (index) => {
            const newHouses = [...houses];
            newHouses.splice(index, 1);
            setHouses(newHouses);

      }

      const handleFormSubmit = (e) => {
            e.preventDefault();
            onsubmit({type: 'success', text: 'Registered New Estate Successfully'})
      }

      return (
            <form className='box-bg-shadow register-form' onSubmit={handleFormSubmit}>

                  <h1 className='form-title'>{title}</h1>
                  <p className='form-subtitle'>
                        Thank you for choosing to register your new estate with us. 
                        Please fill in the details below to get started.
                  </p>

                  <div className="section admin-section">
                       <h4>Estate information</h4>
                       <div className="content">
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='estatename'
                                          placeholder='Estate Name'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='location'
                                          placeholder='Location'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='address'
                                          placeholder='Address'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='contact'
                                          placeholder='Helpline'
                                          onChange={handleImageChange}
                                    />
                              </div>

                       </div>
                  </div>
                  
                  <div className="section admin-section">
                        <h4>Available Houses</h4>
                        <div className="members-display">

                              {
                                    !houses.length ? "Create New Houses" : houses.map( (house, i) => <div key={i}>House  {house.housename} <CiSquareRemove onClick={() => handleDeleteHouseItem(i)} className="icon"/></div>)
                              }     
                        </div>
                        {
                              !dialog ? null : <AddNewHouse onsave={handleSaveNewHouse}/ >
                        }
                        <button type="button" onClick={toggleDialog}>
                              <GrFormAdd  className='icon'/>
                             Add New House
                     
                        </button>

                  </div>
                  
                  <input type='submit' value={btnText} />
            </form>
      )
}


const AddNewHouse = ({onsave}) => {

      const [houseId, setHouseId] = useState('');
      const [housename, setHouseName] = useState('');

      const handleSaveBtn = (e) => {

            if (!houseId || !housename) {
                  //send alert
                  return;
            } 

           const home = {houseId, housename};

           onsave(false, home) //save
      }



      return (
            <div className='dialog'>
                  <h2>Create New House</h2>
                  <div className="form-group">
                        <input 
                              type="text" 
                              name='houseId'
                              placeholder='New House Id'
                              value={houseId}
                              onChange={(e) => setHouseId(e.target.value)}
                              
                        />

                  </div>
                  <div className="form-group">
                        <input 
                              type="text" 
                              name='housename'
                              placeholder='House Name eg B107'
                              value={housename}
                              onChange={(e) => setHouseName(e.target.value)}
                              
                        />

                  </div>
                  <input type="button" value="Save" onClick={handleSaveBtn}/>
            </div>
      )
}