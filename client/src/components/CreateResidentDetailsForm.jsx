import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom';

import {GrFormAdd} from 'react-icons/gr'
import { AddNewMemberDialog } from './AddNewMemberDialog';

export const CreateResidentDetailsForm = ({handleSubmit, title, btnText, formWidth, userData}) => {

      const [openDialog, setOpenDialog] = useState(false);
      const {idnumber, gender, dob, house, vehicle} = userData;
      const location = useLocation();
      const navigate = useNavigate();

      const validationSchema = Yup.object().shape({
            idnumber: Yup.string().required('ID required'),
            gender: Yup.string().required('Gender is required'),
            dob: Yup.string().required('Date of Birth required'),
            house: Yup.string().required('House required.'),
            vehicle: Yup.object().shape({
                  make: Yup.string().required('Vehicle make required'),
                  color: Yup.string().required('Vehicle color required'),
                  model: Yup.string().required('Vehicle model required'),
                  numberplate: Yup.string().required('Vehicle plate required'),

            })
      })
      
      const handleUpdateResidentDetails = async (values) => {
            await handleSubmit(values);
            if(location.pathname.includes("configure-info")) navigate("/auth/login");
      }

      return (
            <Formik 
                  initialValues={{idnumber: `${idnumber || ""}`, gender: `${gender || ""}`, dob: `${dob || ""}`, house: `${house || ""}`, vehicle: {make: `${vehicle.make || ""}`, color: `${vehicle.color || ""}`, model: `${vehicle.model || ""}`, numberplate: `${vehicle.numberplate || ""}`}}}
                  validationSchema={validationSchema}
                  onSubmit={handleUpdateResidentDetails}>
                  <Form className={`bg-white shadow-lg ${formWidth || "w-1/2"} px-6 py-8 border-2 border-cyan-50 rounded-md`}>
                        <h1 className='form-title text-3xl font-semibold'>{title}</h1>
                        <p className='form-subtitle text-md my-2 mb-6'>
                              Thank you for choosing SECURI. 
                              Please fill in the details below to get started.
                        </p>

                        <div className='mb-8'>
                              <h1 className='form-title font-semibold'>Personal Info:</h1>
                              <div className='grid grid-cols-2 gap-x-12'>
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="idnumber" placeholder="National ID"/>
                                          <ErrorMessage className='text-red-200' name='idnumber' component="div"/>
                                    </div>   
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="gender" placeholder="Gender e.g Male_Female"/>
                                          <ErrorMessage className='text-red-200' name='gender' component="div"/>
                                    </div>   
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="dob" placeholder="Year of birth"/>
                                          <ErrorMessage className='text-red-200' name='dob' component="div"/>
                                    </div>  
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="house" placeholder="House e.g B107"/>
                                          <ErrorMessage className='text-red-200' name='house' component="div"/>
                                    </div>   
                              </div>
                        </div>

                        <div className='mb-2'>
                              <h1 className='form-title font-semibold'>Vehicle Information:</h1>
                              <div className='grid grid-cols-2 gap-x-12'>
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="vehicle.make" placeholder="Vehicle make e.g Mazda"/>
                                          <ErrorMessage className='text-red-200' name='vehicle.make' component="div"/>
                                    </div>   
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="vehicle.model" placeholder="Vehicle Model e.g 2018"/>
                                          <ErrorMessage className='text-red-200' name='vehicle.model' component="div"/>
                                    </div>   
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="vehicle.color" placeholder="Vehicle color e.g Red"/>
                                          <ErrorMessage className='text-red-200' name='vehicle.color' component="div"/>
                                    </div> 
                                    <div>
                                          <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="vehicle.numberplate" placeholder="Number Plate e.g QWE 123P"/>
                                          <ErrorMessage className='text-red-200' name='vehicle.numberplate' component="div"/>
                                    </div> 
                              </div>
                        </div>

                        <div className='mb-8'>
                              <h1 className='form-title font-semibold'>Members Details:</h1>
                              {
                                    openDialog && <AddNewMemberDialog closeDialog={setOpenDialog} btnText="Create" title={"Add New Member"}/>
                              }
                              <button type='button'  className='bg-cyan-50 px-3 py-2 rounded-md flex flex-row items-center cursor-pointer text-cyan-200' onClick={() => setOpenDialog(!openDialog)}>
                                    <GrFormAdd className='mr-2 text-2xl'/>
                                    Create New Member
                              </button>
                        </div>

                        <div className='mt-8 flex flex-row items-center justify-end'>
                              <button type="submit" className='bg-sky-950 px-5 py-2 ml-3 rounded-md text-cyan-50' >{btnText}</button>
                        </div>
                  </Form>
            </Formik>
      )
}


