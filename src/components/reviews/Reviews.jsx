import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState('')
  const { movieId } = useParams();
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
        setMovieReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  return <p>{movieReviews.overview}</p>
};

export default Reviews;