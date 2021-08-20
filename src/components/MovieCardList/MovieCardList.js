import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './../MovieCard';
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

MovieCardList.propTypes = {};

export default MovieCardList;
