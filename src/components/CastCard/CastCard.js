import React from 'react';
import PropTypes from 'prop-types';
import { makeCastUrl } from '../../services/movie-utils';

function CastCard({ person }) {
  return (
    <li>
      <img src={makeCastUrl(person.profile_path)} alt={person.name} />
      <p>{person.name}</p>
      <p>Character: {person.character}</p>
    </li>
  );
}

CastCard.propTypes = {};

export default CastCard;
