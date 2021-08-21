import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import ErrorMessage from './../../components/ErrorMessage/ErrorMessage';
import Loading from './../../components/Loading/Loading';
import MovieCardList from './../../components/MovieCardList/MovieCardList';
import SearchBar from '../../components/Searchbar';
import Status from '../../services/status';
import { getMoviesByQuery } from '../../services/moviesdb-api';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      setStatus(Status.PENDING);
      getMoviesByQuery(query)
        .then(({ results }) => {
          const resultsCount = results.length;
          if (resultsCount === 0) {
            setError(new Error(`Sorry, there are no results for ${query}.`));
            setStatus(Status.REJECTED);
            return;
          }

          setMovies(results);
          setStatus(Status.RESOLVED);
        })
        .catch(err => {
          setError(err);
          setStatus(Status.REJECTED);
        });
    }
  }, [query]);

  function handleSeachSubmit(searchQuery) {
    history.push({ ...location, search: `query=${searchQuery}` });
  }

  return (
    <>
      <SearchBar onSubmit={handleSeachSubmit} />
      {status === Status.REJECTED && <ErrorMessage message={error.message} />}
      {status === Status.PENDING && <Loading />}
      {status === Status.RESOLVED && <MovieCardList movies={movies} />}
    </>
  );
}
