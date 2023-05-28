import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import cssModule from './Layout.module.css';

export const Layout = () => {
  return (
    <div className="container">
      <nav className={cssModule.nav}>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/movie">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
