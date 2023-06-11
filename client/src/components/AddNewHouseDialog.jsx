import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'; 

export const AddNewHouse = ({onsave, closeDialog }) => {

      const validationSchema = Yup.object().shape({
            block: Yup.string().required('Block name is required'),
            house: Yup.string().required('House name is required'),
      })
      
      const handleAddNewHouse = (values) => {
            console.log(values);
      }
      const handleCloseForm = () => {
            closeDialog(false);
            console.log("Closed!")
      }


      return (
            <div className=' absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-500 ease-in-out'>
                  <Formik 
                        initialValues={{block: "", house: ""}}
                        validationSchema={validationSchema}
                        onSubmit={handleAddNewHouse}>
                        <Form className="bg-white shadow-lg w-1/4 px-5 py-8 border-2 border-cyan-50 rounded-md">
                              <div>
                                    <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="block" placeholder="Block name"/>
                                    <ErrorMessage className='text-red-200' name='block' component="div"/>
                              </div>                        
                              <div>
                                    <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="house" placeholder="House name e.g B107"/>
                                    <ErrorMessage className='text-red-200' name='house' component="div"/>
                              </div>
                              <div className='mt-4 flex flex-row items-center justify-end'>
                                    <button type='button'  className='bg-cyan-50 px-3 py-2 rounded-md' onClick={handleCloseForm}>Close</button>
                                    <button type="submit" className='bg-sky-950 px-5 py-2 ml-3 rounded-md text-cyan-50' >Add House</button>
                              </div>
                        </Form>
                  </Formik>
            </div>
      )
}