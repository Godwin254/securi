import React, {useState} from 'react'

import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {CiSquareRemove} from 'react-icons/ci'


const RegisterResidentForm = ({onsubmit}) => {

      const [image, setImage] = useState(null);
      const [previewUrl, setPreviewUrl] = useState(null);
      const [dialog, setDialog] = useState(false)

      const handleImageChange = (event) => {
            const selectedImage = event.target.files[0];
            if (selectedImage) {
              const reader = new FileReader();
              reader.onload = () => {
                setPreviewUrl(reader.result);
              };
              reader.readAsDataURL(selectedImage);
              setImage(selectedImage);
              console.log(image);
            }

      };

      const handleInputChange = (e) => {

      }

      const handleFormSubmit = (e) => {
            e.preventDefault();
            onsubmit({type: 'success', text: 'Saved New Resident Details  Successfully'})
      }

      const toggleDialog = () => {
            setDialog(true);
      }

      const handleSaveNewHouse = (res) => {
            console.log(res)
            setDialog(res)
      }

      return (
            <form className='box-bg-shadow' onSubmit={handleFormSubmit}>
                  <h1 className='form-title'>Resident Account Setup</h1>
                  <p className='form-subtitle'>
                        Welcome to our resident portal! We're excited to have you as part of our community. 
                        Please fill out the form below to set up your account.
                  </p>

                  <div className="section">
                       <h4>Resident information</h4>
                       <div className="content">
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='firstname'
                                          placeholder='First name'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='lastname'
                                          placeholder='Last name'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='email'
                                          placeholder='email'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='DOB'
                                          placeholder='Year of birth'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <select name="house" id="house">
                                          <option value="">Select house No</option>
                                          <option value="E107">E107</option>
                                          <option value="A501">A501</option>
                                          <option value="B309">B309</option>
                                          <option value="C507">C507</option>
                                    </select>
                              </div>
                       </div>
                  </div>
                  <div className="section">
                       <h4>Vehicle Information</h4>
                       <div className="content">
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='type'
                                          placeholder='Vehicle type e.g Toyota'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='make'
                                          placeholder='Make e.g 2018'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='color'
                                          placeholder='Color e.g black'
                                          onChange={handleImageChange}
                                    />
                              </div>
                              <div className="form-group">
                                    <input 
                                          type="text" 
                                          name='plate'
                                          placeholder='Number plate'
                                          onChange={handleImageChange}
                                    />
                              </div>
                       </div>
                  </div>

                  <div className="section">
                        <h4>Members Information</h4>
                        <div className="members-display">
                              <div>
                                    Member one
                                    <CiSquareRemove className="icon"/>
                              </div>
                              <div>
                                    Member Two
                                    <CiSquareRemove className='icon' />
                              </div>
                        </div>
                        {
                              !dialog ? null : <AddNewMember onsave={handleSaveNewHouse}/ >
                        }
                        <button type="button" onClick={toggleDialog}>
                              <AiOutlineUsergroupAdd className="icon"/>
                              Add
                        </button>

                  </div>

                  <input type='submit' value='Save New Changes' />
            </form>
      )
}

const AddNewMember = ({onsave}) => {

      const handleSaveBtn = (e) => {
            onsave(false)
            console.log('clicked')
      }

      return (
            <div className='dialog dialog-resident'>
                  <h2>Create New Member</h2>
                  <div className="form-group">
                        <input 
                              type="text" 
                              name='membername'
                              placeholder='Member name'
                              
                        />

                  </div>
                  <div className="form-group">
                        <input 
                              type="text" 
                              name='email'
                              placeholder='email'
                              
                        />

                  </div>
                  <div className="form-group">
                        <input 
                              type="text" 
                              name='relationship'
                              placeholder='Relationship'
                              
                        />

                  </div>
                  <input type="button" value="Save" onClick={handleSaveBtn}/>
            </div>
      )
}

export default RegisterResidentForm;