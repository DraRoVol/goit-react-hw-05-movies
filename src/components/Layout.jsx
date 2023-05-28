import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/movie">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
