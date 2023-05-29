import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import cssModule from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') ?? '');

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
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
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
  }, [searchParams, searchQuery, isSearching]);

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (queryParam) {
      setSearchQuery(queryParam);
      setIsSearching(true);
    }
  }, [searchParams]);

  const updateQueryString = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery === '') {
      setSearchParams({});
    } else {
      setSearchParams({ query: searchQuery });
      setIsSearching(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch} className={cssModule.item}>
          <input className={cssModule.input} type="text" value={searchQuery} onChange={updateQueryString} />
          <button className={cssModule.button} type="submit">Search</button>
      </form>
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
