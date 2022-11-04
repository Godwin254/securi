import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useToken} from '../auth/useToken'

//sign up page
function RegisterUser() {
    const [token, setToken] = useToken()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [userImg, setUserImg] = useState('');
    const [plateNo, setPlateNo] = useState('');
    const [carColor, setCarColor] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [carImage, setCarImage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    //image
    const image = require('../images/test-img2.jpg')


    const handleRegister = async (e) => {
        e.preventDefault();
        const res = axios.post('/api/residents/register', {
            firstName,
            lastName,
            mobile,
            email,
            gender,
            userImg,
            plateNo,
            carColor,
            houseNo,
            carImage,
            password

        });

        const {token} = res.data;
        setToken(token);
        navigate('/resident')
    
    }

  return (
    <div className="RegisterUser">
        <div className="RegisterUser__left-container">
            <img src={image} width="300px" alt="background" />
            <div className="RegisterUser__left-container__overlay"></div>
            <div className='RegisterUser__left-container__content'>
                <h1>New to SECURI APP?</h1>
                <p>
                    Securi is a security system that allows you to
                    monitor access to your vehicle from anywhere in the world.
                </p>
            </div>
        </div>
        <div className="RegisterUser__right-container">
            <h2>Request for an account</h2>
            <span>Error boundary shown here</span>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                    <input 
                        type="text"
                        placeholder='First name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder='Mobile number'
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text" 
                        placeholder='Gender'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                        type="file" 
                        placeholder='Upload image'
                        value={userImg}
                        onChange={(e) => setUserImg(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input 
                        type="text" 
                        placeholder='Plate number'
                        value={plateNo}
                        onChange={(e) => setPlateNo(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Car color'
                        value={carColor}
                        onChange={(e) => setCarColor(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input 
                        type="text" 
                        placeholder='House number'
                        value={houseNo}
                        onChange={(e) => setHouseNo(e.target.value)} 
                    />
                    <input 
                        type="file" 
                        placeholder='Car image'
                        value={carImage}
                        onChange={(e) => setCarImage(e.target.value)} 
                    />
                </div>
                <div className="form-control">
                    <input
                        type="password"
                        placeholder='Create your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password" 
                        placeholder='Confirm your password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="button"
                        value='Finish registration'
                        disabled={true} 
                    />
                    <input
                        type="button"
                        Value='Already have an account? Login'
                        onClick={() => navigate('/login')}
                    />
                </div>
            </form>
        </div>

    </div>
  )
}

export default RegisterUser