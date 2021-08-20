import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieCardList from '../../components/MovieCardList';
import { getTrendingMovies } from '../../services/moviesdb-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => {
        //todo handle errors
        console.log(err);
      });
  }, []);

  return (
    <>
      <MovieCardList movies={movies} />
    </>
  );
}
