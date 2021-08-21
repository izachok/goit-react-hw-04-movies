import { useEffect, useState } from 'react';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loading from './../../components/Loading/Loading';
import MovieCardList from '../../components/MovieCardList';
import Status from '../../services/status';
import { getTrendingMovies } from '../../services/moviesdb-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    getTrendingMovies()
      .then(({ results }) => {
        const resultsCount = results.length;
        if (resultsCount === 0) {
          setError(new Error(`Sorry, there is nothing trending today.`));
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
  }, []);

  return (
    <>
      {status === Status.REJECTED && <ErrorMessage message={error.message} />}
      {status === Status.PENDING && <Loading />}
      {status === Status.RESOLVED && <MovieCardList movies={movies} />}
    </>
  );
}
