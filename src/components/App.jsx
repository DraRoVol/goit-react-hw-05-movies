import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/moviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews')); 

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

