import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const API = "https://securi-app.herokuapp.com/api/admins/login"; 
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        //perform login action
        //validate inputs
        if(!(email && password)) {
            setError('Please enter all fields');
        }
        
        /*send request to server
        axios.post(API, {email, password})
        .then(res => {
            console.log(res);

        })
        .catch(err => {
            console.log(err);
            setError(err.message);
        });*/


        //navgate to admin dashboard
        navigate('/admin/dashboard');
        //clear inputs
        if (email && password) {
            setEmail('');
            setPassword('');
            setError('');
        }

    }

  return (
    <div className='AdminPage'>
        <form onSubmit={handleSubmit}>
            <h3>Admin Login</h3>
            <input 
                type='text' 
                name='email' 
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type='password' 
                name="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
             />
            <input type='submit' value="Login" />
            <span>{error}</span>
        </form>

    </div>
  )
}

export default Admin