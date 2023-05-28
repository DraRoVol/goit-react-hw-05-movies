import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
    const [castInfo, setCastInfo] = useState()
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCastDetails = async () => {
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
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        options
            )
            const data = await response.json();
            setCastInfo(data);
        } catch (error) {
            console.error(error)
        }
      };
      fetchCastDetails()
  }, [movieId]);
    return (
        <ul>
            {castInfo && castInfo.cast.map(e => <li key={e.id}>
                <img src={`https://image.tmdb.org/t/p/w500${e.profile_path}`} alt="foto" />
                <p>{e.name}</p>
                <p>Character:{e.character}</p>
            </li>)}
        </ul>
    );
};

export default Cast;
