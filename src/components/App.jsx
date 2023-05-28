import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews')); 

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movie" element={<MoviesPage />} />
          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
  );
};
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}

