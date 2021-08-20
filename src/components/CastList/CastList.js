import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../services/moviesdb-api';
import CastCard from '../CastCard/CastCard';

function CastList() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastById(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(err => {
        //todo handle errors
        console.log(err);
      });
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.slice(0, 20).map(person => (
            <CastCard key={person.id} person={person} />
          ))}
        </ul>
      )}
    </>
  );
}

export default CastList;
