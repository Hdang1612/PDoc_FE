// src/routes/PrivateRoute.tsx
import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const PrivateRoute = ({ isAuthenticated, children }: Props) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
