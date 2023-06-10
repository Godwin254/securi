import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


export function AddNewMemberDialog({residentId, btnText, memberDetails, closeDialog}) {

      const validationSchema = Yup.object().shape({
            firstname: Yup.string().required('First name is required'),
            lastname: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            relationship: Yup.string().required('Include your relationship.'),
      })
      
      const handleCreateNewMember = (values) => {
            console.log(values);
      }

      const handleClose = () => {
            closeDialog(false);
            console.log("Closed!")
      }


  return (
    <div className=' absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-500 ease-in-out'>
            <Formik 
                  initialValues={{firstname: "", lastname: "", email: "", relationship: "", residentId}}
                  validationSchema={validationSchema}
                  onSubmit={handleCreateNewMember}>
                  <Form className="bg-white shadow-lg w-1/4 px-5 py-8 border-2 border-cyan-50 rounded-md">
                        <div>
                              <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="firstname" placeholder="Member first name"/>
                              <ErrorMessage className='text-red-200' name='firstname' component="div"/>
                        </div>                        
                        <div>
                              <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="lastname" placeholder="Member last name"/>
                              <ErrorMessage className='text-red-200' name='lastname' component="div"/>
                        </div>
                        <div className=''>
                              <Field type="email" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="email" placeholder="Email address"/>
                              <ErrorMessage className='text-red-200' name='email' component="div"/>
                        </div>
                        <div>
                              <Field type="text" className="border-b text-lg border-ccc w-full px-2 py-2 outline-none my-1" name="relationship" placeholder="Relationship e.g Friend"/>
                              <ErrorMessage className='text-red-200' name='relationship' component="div"/>
                        </div>
                        <div className='mt-4 flex flex-row items-center justify-end'>
                              <button type='button'  className='bg-cyan-50 px-3 py-2 rounded-md' onClick={handleClose}>Close</button>
                              <button type="submit" className='bg-sky-950 px-5 py-2 ml-3 rounded-md text-cyan-50' >{btnText} Member</button>
                        </div>
                  </Form>
            </Formik>
    </div>
  )
}