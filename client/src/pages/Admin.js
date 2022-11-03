import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useToken} from '../auth/useToken';

function Admin() {
    const [token, setToken] = useToken();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        if(!(email && password)) {
            setError('Please enter all fields');
        }
        
        const res = await axios.post('http://localhost:8000/api/admins/login', 
        {
            email,
            password
        });

        if(res.status !== 200){
            setError('Server internal error')
        }

        //console.log(res)
        const {token} = res.data;
        setToken(token);
        //navgate to admin dashboard
        navigate('/admin/requests');
        //clear inputs
        if (email && password) {
            setEmail('');
            setPassword('');
            setError('');
        }

    }

    //handle logout
    const handleAdminLogout = (e) => {
        localStorage.removeItem('token');

    }

  return (
    <div className='AdminPage'>
          {error && <span>{error}</span>}
          <form onSubmit={handleAdminLogin}>
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
            <input 
                type='submit' 
                value="Login"
                disabled={!email || !password}
            />
        </form>

    </div>
  )
}

export default Admin