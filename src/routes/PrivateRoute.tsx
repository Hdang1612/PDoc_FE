// src/guards/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { auth } from "../api/auth";

interface Props {
  children: any;
}

const PrivateRoute = ({ children }: Props) => {
  console.log(auth.isAuthenticated());
  return auth.isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
