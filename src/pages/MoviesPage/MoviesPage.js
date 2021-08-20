import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../components/Searchbar';
import { getMoviesByQuery } from '../../services/moviesdb-api';
import MovieCardList from './../../components/MovieCardList/MovieCardList';

function MoviesPage(props) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      getMoviesByQuery(query)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch(err => {
          //todo handle errors
          console.log(err);
        });
    }
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={setQuery} />
      <MovieCardList movies={movies} />
    </>
  );
}

MoviesPage.propTypes = {};

export default MoviesPage;
