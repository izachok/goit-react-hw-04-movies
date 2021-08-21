import { useEffect, useState } from 'react';

import ErrorMessage from './../ErrorMessage/ErrorMessage';
import Loading from './../Loading/Loading';
import ReviewCard from '../ReviewCard';
import Status from '../../services/status';
import { getReviewsById } from '../../services/moviesdb-api';
import { useParams } from 'react-router-dom';

export default function ReviewList() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    getReviewsById(movieId)
      .then(({ results }) => {
        setReviews(results);
        setStatus(Status.RESOLVED);
      })
      .catch(err => {
        setError(err);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.REJECTED && <ErrorMessage message={error.message} />}
      {status === Status.PENDING && <Loading />}

      {status === Status.RESOLVED &&
        (reviews.length > 0 ? (
          <ul className="list">
            {reviews.slice(0, 20).map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </ul>
        ) : (
          <div>We don't have any reviews for this movie.</div>
        ))}
    </>
  );
}
