import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// import MainLayout from "../layouts/MainLayout";
import PrivateRoute from './PrivateRoute';
// import Home from "../pages/Home";
import MainLayout from '../layout/MainLayout';
import NotFound from '../pages/NotFound';
// import Login from '../pages/auth/Login';
import AuthLayout from '../layout/AuthLayout';
import LoginForm from '../pages/auth/components/LoginForm';
import ForgotPwdForm from '../pages/auth/components/ForgotPwdForm';
import SignUpForm from '../pages/auth/components/SignUpForm';
import ConfirmOTP from '../pages/auth/components/ConfirmOTP';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const AppRoutes = () => {
  //   const isAuthenticated = true;

  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'home',
          element: (
            <PrivateRoute>
              {/* <Dashboard /> */}
              <Home />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { index: true, element: <LoginForm /> },
        { path: 'forgot-password', element: <ForgotPwdForm /> },
        { path: 'register', element: <SignUpForm /> },
        { path: 'confirm-otp', element: <ConfirmOTP /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);
};

export default AppRoutes;
