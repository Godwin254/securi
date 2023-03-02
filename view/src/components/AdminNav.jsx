import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useUser } from '../auth/useUser';

const Nav = ({count}) => {
    const navigate = useNavigate();
    const {role} = useUser();

    //console.log(role);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin-login');
    }
    return (
        <nav className='Nav'>
            <h3>Dashboard <span>{role}</span></h3>
            <Link to='/admin/requests' data-text={count}>Requests</Link>
            <Link to='/admin/manage-users'>Manage users</Link>
            <Link to='/admin/access-history'>Access Logs</Link>
            <input 
                type="button"
                value="Logout"
                onClick={handleLogout}
            />

        </nav>
    )
}

export default Nav;
