import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import AlertBox from '../../components/AlertBox';
import { registerUser } from '../../services/AuthService'

function Signup() {

      const [firstname, setFirstName] = useState('');
      const [lastname, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [role, setRole] = useState('');
      const [alert, setAlert] = useState("");

      const navigate = useNavigate();

      //handle login
      const handleRegisterUser = async (e) => {
            e.preventDefault();

            if (!firstname || !lastname || !email || !phone || !password || !confirmPassword || !role){
                  setAlert({type: 'warning', text: "All inputs are required"});
                  return;
            }
            if(password !== confirmPassword){
                  setAlert({type: 'warning', text: "Passwords do not much!"})
                  return;
            }
            const userData = {
                  firstname, lastname, email,
                  phone, role, password
            }

            const {error} = await registerUser(userData)

            if(error){
                  setAlert({ type: 'error', text:"An error occured on login!"});
                  return;
            }
            setAlert({ type: 'success', text:"Registration successful!"})
            setTimeout(() => {
                  navigate('/auth/login');
            },3000)
      }

      

      const handleInputChange = (e) => {
            
            const {name, value} = e.target;
            switch(name) {
                  case "firstname":
                        setFirstName(value);
                        break;
                  case "lastname":
                        setLastName(value);
                        break;
                  case "email":
                        setEmail(value);
                        break;
                  case "phone":
                        setPhone(value);
                        break;
                  case "password":
                        setPassword(value);
                        break;
                  case "confirmpassword":
                        setConfirmPassword(value);
                        break;
                  case "role":
                        setRole(value);
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
                        alert ? ( <AlertBox type={alert.type} text={alert.text}/>) : null
                  }


                  <form onSubmit={handleRegisterUser} className="login__form box-bg-shadow">

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
                              <input
                                    type="text"
                                    name='phone'
                                    placeholder='Phone number'
                                    onChange={handleInputChange}
                                    value={phone}
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
                              <Link to='/auth/login'>Already have an account? Login</Link>
                        </div>



                  </form>

            </div>
      </>
        
    )
}

export default Signup;