import React from 'react';

// MovieCard-komponenten som viser brukerens favorittfilmer og sjangere
const MovieCard = ({ activeUser, favoriteMovies, favoriteGenres }) => {
  return (
    <div>
      {activeUser && (
        <>
          <h2>{activeUser}'s favorittfilmer</h2> {/* Viser overskrift med brukerens navn */}
          <div className="movie-list">
            {favoriteMovies.map((movie, index) => (
              <div key={index} className="movie-card">
                <h3>{movie.movietitle}</h3>  {/* Viser filmens tittel */}
                <a href={`/movie/${movie.movieurl}`}>Se film</a>
              </div>
            ))}
          </div>
          {favoriteGenres && ( // Sjekker om favorittsjangere finnes
            <div>
              <h4>Favorittsjangere:</h4>  {/* Viser overskrift for sjangere */}
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
