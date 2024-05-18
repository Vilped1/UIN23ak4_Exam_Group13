import React from 'react';

const MovieCard = ({ activeUser, favoriteMovies, favoriteGenres }) => {
  return (
    <div>
      {activeUser && (
        <>
          <h2>{activeUser}'s favorittfilmer</h2>
          <div className="movie-list">
            {favoriteMovies.map((movie, index) => (
              <div key={index} className="movie-card">
                <h3>{movie.movietitle}</h3>
                <a href={`/movie/${movie.movieurl}`}>Se film</a>
              </div>
            ))}
          </div>
          {favoriteGenres && (
            <div>
              <h4>Favorittsjangere:</h4>
              <ul>
                {favoriteGenres.map((genre) => (
                  <li key={genre._id}>{genre.genre}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MovieCard;
