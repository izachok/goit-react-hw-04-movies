import PropTypes from 'prop-types';
import React from 'react';
import { makeCastUrl } from '../../services/movie-utils';
import s from './CastCard.module.scss';

function CastCard({ person }) {
  return (
    <li className={s.item}>
      <img
        src={makeCastUrl(person.profile_path)}
        alt={person.name}
        className={s.photo}
      />
      <p className={s.row}>{person.name}</p>
      <p className={s.row}>Character: {person.character}</p>
    </li>
  );
}

CastCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  }).isRequired,
};

export default CastCard;
