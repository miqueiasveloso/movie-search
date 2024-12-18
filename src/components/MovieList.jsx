import React from 'react';

const MovieList = ({ movies }) => {
  if (movies.length === 0) return null;

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id} className="movie-item">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
