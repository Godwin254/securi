import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Nav = ({count}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        //localStorage.removeItem('token');
        navigate('/admin');
    }
    return (
        <nav className='Nav'>
            <h3>Dashboard</h3>
            <Link to='/admin/dashboard' data-text={count}>Requests</Link>
            <Link to='/admin/dashboard/manage-users'>Manage users</Link>
            <Link to='/admin/dashboard/access-history'>Access Logs</Link>
            <Link to='/admin' onClick={handleLogout}>Logout</Link>

        </nav>
    )
}

export default Nav;
