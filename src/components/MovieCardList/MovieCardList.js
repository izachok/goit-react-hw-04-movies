import MovieCard from './../MovieCard';
import PropTypes from 'prop-types';
import React from 'react';
import s from './MovieCardList.module.scss';

function MovieCardList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}

MovieCardList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MovieCardList;
