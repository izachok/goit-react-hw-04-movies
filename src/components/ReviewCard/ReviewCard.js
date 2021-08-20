import React from 'react';
import PropTypes from 'prop-types';

function ReviewCard({ review }) {
  return (
    <li>
      <p>Author: {review.author}</p>
      <p>{review.content}</p>
    </li>
  );
}

ReviewCard.propTypes = {};

export default ReviewCard;
