import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.movietitle}</h3>
      <a href={`/movie/${movie.movieurl}`}>Se film</a>
    </div>
  );
};

export default MovieCard;
