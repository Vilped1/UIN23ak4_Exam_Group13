import React from 'react';
import MovieCard from './MovieCard';


const FrontPage = ({ activeUser, favoriteMovies }) => {
  return (
    <div>
      {activeUser && (
        <>
          <h2>{activeUser}'s favorittfilmer</h2>
          <div className="movie-list">
            {favoriteMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FrontPage;
