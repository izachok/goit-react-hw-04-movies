import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useRouteMatch, Route } from 'react-router-dom';
import { getMovieById } from '../../services/moviesdb-api';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import AdditionalNavigation from '../../components/AdditionalNavigation/AdditionalNavigation';
import CastList from '../../components/CastList/CastList';
import ReviewList from '../../components/ReviewList/ReviewList';

function MovieDetailsPage(props) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const { path } = useRouteMatch();

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovie)
      .catch(err => {
        //todo handle errors
        console.log(err);
      });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <MovieInfo movie={movie} />
          <AdditionalNavigation />
        </>
      )}
      <Route path={`${path}/cast`}>{movie && <CastList />}</Route>
      <Route path={`${path}/reviews`}>{movie && <ReviewList />}</Route>
    </>
  );
}

MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
