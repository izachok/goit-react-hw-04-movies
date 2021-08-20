import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/moviesdb-api';
import ReviewCard from '../ReviewCard';

export default function ReviewList() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsById(movieId)
      .then(({ results }) => {
        console.log(results);
        setReviews(results);
      })
      .catch(err => {
        //todo handle errors
        console.log(err);
      });
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.slice(0, 20).map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
}
