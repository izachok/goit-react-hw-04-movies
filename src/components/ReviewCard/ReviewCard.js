import PropTypes from 'prop-types';
import React from 'react';
import s from './ReviewCard.module.scss';

function ReviewCard({ review }) {
  return (
    <li className={s.item}>
      <p className={s.title}>Author: {review.author}</p>
      <p className={s.text}>{review.content}</p>
    </li>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default ReviewCard;
