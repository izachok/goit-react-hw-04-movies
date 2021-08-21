import { NavLink, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import React from 'react';
import { makePosterUrl } from '../../services/movie-utils';
import s from './MovieCard.module.scss';

function MovieCard({ movie }) {
  const { id, title, poster_path } = movie;
  const location = useLocation();

  return (
    <li className={s.cardWrapper}>
      <NavLink
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
      >
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
