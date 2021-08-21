import {
  Link,
  Route,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';

import AdditionalNavigation from '../../components/AdditionalNavigation';
import ErrorMessage from './../../components/ErrorMessage/ErrorMessage';
import Loading from '../../components/Loading';
import MovieInfo from '../../components/MovieInfo';
import Status from '../../services/status';
import { getMovieById } from '../../services/moviesdb-api';

const CastList = lazy(() =>
  import('../../components/CastList' /* webpackChunkName: "cast-list" */),
);
const ReviewList = lazy(() =>
  import('../../components/ReviewList' /* webpackChunkName: "review-list" */),
);

export default function MovieDetailsPage() {
  const { path } = useRouteMatch();
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [locationFrom, setLocationFrom] = useState(
    location?.state?.from ?? '/',
  );

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieById(movieId)
      .then(result => {
        setMovie(result);
        setStatus(Status.RESOLVED);
      })
      .catch(err => {
        setError(err);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      <Link type="button" to={locationFrom}>
        Go back
      </Link>
      {status === Status.REJECTED && <ErrorMessage message={error.message} />}
      {status === Status.PENDING && <Loading />}
      {status === Status.RESOLVED && (
        <>
          <MovieInfo movie={movie} />
          <AdditionalNavigation />
        </>
      )}
      <Suspense fallback={<Loading />}>
        <Route path={`${path}/cast`}>{movie && <CastList />}</Route>
        <Route path={`${path}/reviews`}>{movie && <ReviewList />}</Route>
      </Suspense>
    </>
  );
}
