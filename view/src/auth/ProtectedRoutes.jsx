import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from './useUser'


export const ProtectedRoutes = ({ children }) => {
    const user = useUser();

    return  user ? <Outlet /> : <Navigate to='/auth/login' />;
}