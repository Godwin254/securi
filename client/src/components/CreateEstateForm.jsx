import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import {CiSquareRemove} from 'react-icons/ci'
import {GrFormAdd} from 'react-icons/gr'

import { AddNewHouse } from './AddNewHouseDialog';
import { getLocalStorageItem } from '../utils/utils';


export const CreateEstateForm = ({handleSubmit, title, btnText, formWidth, estate}) => {

      const [openDialog, setOpenDialog] = useState(false);
      const [houses, setHouses] = useState([])
      const navigate = useNavigate();
      const location = useLocation();


      const validationSchema = Yup.object().shape({
            estateName: Yup.string().required('Estate name is required'),
            location: Yup.string().required('Location is required'),
            phone: Yup.string().required('Hepline is required'),
      })
      
      
      const handleSubmitClick = async (values) => {
            await handleSubmit(values);
            if(location.pathname.includes("create-estate")) navigate("/auth/login");
      }

      return (
            <Formik 
                  initialValues={{estateName: `${estate.estateName || ""}`, location: `${estate.location|| ""}`, phone: `${estate.phone || ""}`}}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmitClick}>
                  <Form className={`bg-white shadow-lg ${formWidth || "w-1/2"} px-5 py-8 border-2 border-cyan-50 rounded-md`}>
                        <h1 className='form-title text-3xl font-semibold'>{title}</h1>
                        <p className='form-subtitle text-md my-2 mb-6'>
                              Thank you for choosing SECURI. 
                              Please fill in Estate details below to get started.
                        </p>


                        <div>
                              <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="estateName" placeholder="Estate name"/>
                              <ErrorMessage className='text-red-200' name='estateName' component="div"/>
                        </div>                        
                        <div>
                              <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="location" placeholder="Estate Address"/>
                              <ErrorMessage className='text-red-200' name='location' component="div"/>
                        </div>
                        <div className=''>
                              <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="phone" placeholder="Estate help-line"/>
                              <ErrorMessage className='text-red-200' name='phone' component="div"/>
                        </div>
                        <div className='mt-4'>
                              <h1 className='form-title'>Available Houses</h1>
                              {
                                    openDialog && <AddNewHouse  closeDialog={setOpenDialog}/>
                              }
                              <button type='button'  className='bg-cyan-50 px-3 py-2 rounded-md flex flex-row items-center cursor-pointer text-cyan-200' onClick={() => setOpenDialog(!openDialog)}>
                                    <GrFormAdd className='mr-2 text-2xl'/>
                                    Create House
                              </button>
                        </div>

                       
                        <div className='mt-8 flex flex-row items-center justify-end'>
                              <button type="submit" className='bg-sky-950 px-5 py-2 ml-3 rounded-md text-cyan-50' >{btnText}</button>
                        </div>
                  </Form>
            </Formik>
      )
}
