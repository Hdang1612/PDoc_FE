// src/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>Header here</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer here</footer>
    </div>
  );
};

export default MainLayout;
