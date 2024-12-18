import React, { useState } from 'react';
import { fetchMovies } from './api';
import MovieList from './components/MovieList';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    if (query.trim()) {
      try {
        const results = await fetchMovies(query);
        if (results.length > 0) {
          setMovies(results);
        } else {
          setError('No results found. Try a different search.');
        }
      } catch (err) {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div>
      <header>
        <h1>Movie Search App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        {error && <p className="error">{error}</p>}
        <MovieList movies={movies} />
      </main>
    </div>
  );
};

export default App;
