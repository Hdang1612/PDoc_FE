// src/components/ProtectedRoute.jsx
import { storage } from '../utils/localStorage';
import { Navigate, Outlet } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  role: string;
}

const ProtectedRoute = ({ roles = [] as string[] }) => {
  const token = storage.get('accessToken');
  const user = storage.get<User>('user');

  if (!token || !user) {
    return <Navigate to="/auth" replace />;
  }

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/unAuthor" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
