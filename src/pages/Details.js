import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/apiService';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching details:', error);
        setError('Error fetching details');
      }
    };

    fetchDetails();
  }, [id]);

  if (error) {
    return <div className="container"><h1>{error}</h1></div>;
  }

  if (!movie) {
    return <div className="container"><h1>Loading...</h1></div>;
  }

  return (
    <div className="container">
      <h1>{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default Details;