import { useEffect, useState } from 'react';

import CastCard from '../CastCard/CastCard';
import ErrorMessage from './../ErrorMessage/ErrorMessage';
import Loading from './../Loading/Loading';
import Status from '../../services/status';
import { getCastById } from '../../services/moviesdb-api';
import s from './CastList.module.scss';
import { useParams } from 'react-router-dom';

function CastList() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);
    getCastById(movieId)
      .then(({ cast }) => {
        const resultsCount = cast.length;
        if (resultsCount === 0) {
          setError(new Error(`Sorry, we haven't information about the cast`));
          setStatus(Status.REJECTED);
          return;
        }
        setCast(cast);
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
      {status === Status.RESOLVED && (
        <ul className={s.list}>
          {cast.slice(0, 20).map(person => (
            <CastCard key={person.id} person={person} />
          ))}
        </ul>
      )}
    </>
  );
}

export default CastList;
