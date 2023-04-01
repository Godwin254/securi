import React, {useState} from 'react'

import Navbar from '../../components/Navbar'
import AlertBox from '../../components/AlertBox'
import RegisterEstateForm from '../../components/RegisterEstateForm'
import RegisterResidentForm from '../../components/RegisterResidentForm'

function Register() {
      const [alert, setAlert] = useState(null)

      const user = 'admin';

      const handleFormSubmit = (res) => {
            setAlert(res)
      }
  return (
    <>
      <Navbar />
      {
            alert ?  <AlertBox type={alert.type} text={alert.text} /> : null
      }
      
      <div className="register">
            {
                  !user === 'admin' ? <RegisterEstateForm onsubmit={handleFormSubmit} title='Register New Estate' btnText='Create New Estate'/> : <RegisterResidentForm onsubmit={handleFormSubmit}/>
            }
      </div>

    </>
  )
}


export default Register