import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import cssModule from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODNhZWU2YjYwMWRjNTY1NmY0ODQ1ODgzZmYyMDVlMyIsInN1YiI6IjY0NmY4YzY5YzVhZGE1MDBhODJkODAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcK5msQXw_EpiSZxf4jlq1LUT05Y42famLe5sWKl8SY';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
          options
        );
        const data = await response.json();
        const movieInfo = data.results.map((e) => [e.id, e.title || e.name]);
        setMovies(movieInfo);
        setIsSearching(false);
      } catch (error) {
        console.log(error);
        setIsSearching(false);
      }
    };

    if (isSearching) {
      fetchMovieDetails();
    }
  }, [searchParams, query, isSearching]);

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams ({})
    }
    setSearchParams({query: e.target.value})
  }

  const handleSearch = () => {
        if (query === '') {
      return setSearchParams ({})
    }
    setSearchParams({ query })
    setIsSearching(true);
  }
    
  return (
    <div>
      <div className={cssModule.item}>
        <input className={cssModule.input} type="text" value={query} onChange={updateQueryString} />
        <button className={cssModule.button} onClick={handleSearch}>Search</button>
      </div>
      {isSearching && <p>Loading...</p>}
      {movies.length > 0 && (
        <ul className={cssModule.list}>
          {movies.map((e) => (
            <li key={e[0]}>
              <Link to={`/movie/${e[0]}`} state={{ from: location }}>
                {e[1]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
