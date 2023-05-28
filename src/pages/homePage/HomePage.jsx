import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cssModule from './HomePage.module.css';

const HomePage = () => {
  const [movieName, setMovieName] = useState([]);
  const location = useLocation()
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODNhZWU2YjYwMWRjNTY1NmY0ODQ1ODgzZmYyMDVlMyIsInN1YiI6IjY0NmY4YzY5YzVhZGE1MDBhODJkODAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcK5msQXw_EpiSZxf4jlq1LUT05Y42famLe5sWKl8SY',
      },
    };
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(res => res.json())
      .then(e => e.results)
      .then(e => e.map(e => [e.id, e.title || e.name]))
      .then(e => setMovieName(e))
      .catch(err => console.error(err));
  });
  return (
    <div>
      <h1>Trending today</h1>
      <ul className={cssModule.list}>
        {movieName.map(e => (
          <li key={e[0]}>
            <Link to={`movie/${e[0]}`} state={{ from: location}}>{e[1]}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomePage;
