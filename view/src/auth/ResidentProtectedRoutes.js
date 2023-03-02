import {Navigate, Outlet} from 'react-router-dom'
import {useUser} from './useUser'


export const ResidentProtectedRoutes = ({children}) => {
    const resident = useUser();

    return resident ? <Outlet /> : <Navigate to='/login' />
    //if (!resident) return <Redirect to="/login" />
    //return children;
}