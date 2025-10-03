import { Outlet } from 'react-router-dom';
import bgLogin from '../../assets/images/bg-login.svg';

function AuthLayout() {
  return (
    <div className="auth-container">
      <div className="flex min-h-screen flex-col items-center gap-4 bg-white lg:flex-row">
        <div className="login-image h-1/3 w-full lg:h-screen lg:w-2/3">
          <img className="h-full w-full object-cover" src={bgLogin} alt="" />
        </div>
        <div className="login-form flex w-full items-center justify-center px-3 lg:w-1/3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
