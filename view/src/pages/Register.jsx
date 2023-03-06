import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import {GrFacebook} from "react-icons/gr"
import {MdOutlineErrorOutline, MdWarningAmber} from "react-icons/md"
import {VscPass} from 'react-icons/vsc'

import Navbar from '../components/Navbar';
import Alert from '../components/Alert'

function Register() {

      const [firstname, setFirstName] = useState('');
      const [lastname, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [role, setRole] = useState('');
      const [alert, setAlert] = useState("");

      //const navigate = useNavigate();

      //handle login
      const createNewUser = async (e) => {
            e.preventDefault();

            if (!firstname || !lastname || !email || !password || !confirmPassword || !role){
                  setAlert("All inputs are required");
                  return;
            }

           if(password !== confirmPassword){
                  setAlert("Ensure passwords are similar!")
                  return;
           }

            const res = await axios.post('api/auth/register', {
                  firstname,
                  lastname,
                  email,
                  password,
                  role
            });
            //check if user or admin
            //navigate('/resident');
      }

      

      const handleInputChange = (e) => {
            
            const {name, value} = e.target;
            //console.log(name, value)
            switch(name) {
                  case "firstname":
                        setFirstName(firstname);
                        break;
                  case "lastname":
                        setLastName(lastname);
                        break;
                  case "email":
                        setEmail(value);
                        break;
                  case "password":
                        setPassword(value);
                        break;
                  case "confirmpassword":
                        setConfirmPassword(confirmPassword);
                        break;
                  case "role":
                        setRole(role);
                        break;
                  default:
                        break;
            }

            //clear alert message
            setAlert("")

            
      }

    return (

      <>
            <Navbar />
            <div  className="login">

                  {
                        alert ? ( <Alert text={alert}/>) : null
                  }


                  <form onSubmit={createNewUser} className="login__form">

                        <h1 className="login__form__title">
                              Create Account
                        </h1>

                        <p className="login__form__text">
                              Enter you credentials below.
                        </p>
                        <div className="login__form__control">

                              <input
                                    type="text"
                                    name='firstname'
                                    placeholder='First name'
                                    onChange={handleInputChange}
                                    value={firstname}
                              />
                        </div>
                        <div className="login__form__control">

                              <input
                                    type="text"
                                    name='lastname'
                                    placeholder='Last name'
                                    onChange={handleInputChange}
                                    value={lastname}
                              />
                        </div>
                        <div className="login__form__control">

                              <input
                                    type="email"
                                    name='email'
                                    placeholder='Email address'
                                    onChange={handleInputChange}
                                    value={email}
                              />
                        </div>
                        <div className="login__form__control">
                              <select id="roles" name="role" onChange={handleInputChange}>
                                    <option value="">Select Your Role</option>
                                    <option value="admin">Administrator</option>
                                    <option value="user">Resident</option>
                                    <option value="security">Security</option>
                              </select>
                        </div>
                        <div className="login__form__control passwordField">
                              <input 
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    onChange={handleInputChange}
                                    value={password}
                              />
                              <input 
                                    type="password"
                                    name="confirmpassword"
                                    placeholder='Confirm password'
                                    onChange={handleInputChange}
                                    value={confirmPassword}
                              />
                        </div>
                        <div className="login__form__control">

                              <input
                                    type="submit"
                                    value='Register'
                              />
                              <a href='/auth/login'>Already have an account? Login</a>
                        </div>



                  </form>

            </div>
      </>
        
    )
}

export default Register;