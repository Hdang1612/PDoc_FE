import { lazy } from "react";
import { useRoutes } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
// import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const AppRoutes = () => {
  //   const isAuthenticated = true;

  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "home",
          element: (
            <PrivateRoute>
              {/* <Dashboard /> */}
              <Home />
            </PrivateRoute>
          ),
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default AppRoutes;
