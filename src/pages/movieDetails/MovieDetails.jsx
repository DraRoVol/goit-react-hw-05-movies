import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation()
  const backLinkLocationRef = useRef(location.state?.from ?? '/')
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODNhZWU2YjYwMWRjNTY1NmY0ODQ1ODgzZmYyMDVlMyIsInN1YiI6IjY0NmY4YzY5YzVhZGE1MDBhODJkODAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GcK5msQXw_EpiSZxf4jlq1LUT05Y42famLe5sWKl8SY',
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options
        );
        const data = await response.json();
        setMovieInfo(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} alt="poster" />
        <h1>{movieInfo.original_title}</h1>
        <p>User Score:{(movieInfo.vote_average*10).toFixed(0)}%</p>
        <h2>Overview</h2>
        <p>{movieInfo.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movieInfo.genres &&
            movieInfo.genres.map(e => <li key={e.id}>{e.name}</li>)}
        </ul>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to='cast'>Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
