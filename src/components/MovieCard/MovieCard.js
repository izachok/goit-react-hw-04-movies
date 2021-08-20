import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieCard.module.scss';
import { makePosterUrl } from '../../services/movie-utils';

function MovieCard({ movie }) {
  const { id, title, poster_path } = movie;

  return (
    <li className={s.cardWrapper}>
      <NavLink to={`/movies/${id}`}>
        <div className={s.card}>
          <div className={s.boxImg}>
            <img
              className={s.img}
              src={makePosterUrl(poster_path)}
              alt={title}
            />
          </div>
          <h4 className={s.title}>{title}</h4>
        </div>
      </NavLink>
    </li>
  );
}

MovieCard.propTypes = {};

export default MovieCard;
