import PropTypes from 'prop-types';
import React from 'react';
import { makePosterUrl } from '../../services/movie-utils';
import s from './MovieInfo.module.scss';

function MovieInfo({ movie }) {
  return (
    <div className={s.contentWrapper}>
      <div className={s.posterWrapper}>
        <img
          src={makePosterUrl(movie.poster_path)}
          alt={movie.title}
          className={s.poster}
        />
      </div>
      <div className={s.movieContent}>
        <h2 className={s.title}>{movie.title}</h2>
        <table className={s.properties}>
          <tbody>
            <tr>
              <td className={s.propertyItem}>Vote/Votes</td>
              <td className={s.valueItem}>
                <span className={s.vote}>{movie.vote_average}</span> /{' '}
                <span className={s.voteLight}>{movie.vote_count}</span>
              </td>
            </tr>
            <tr>
              <td className={s.propertyItem}>Popularity</td>
              <td className={s.valueItem}>{movie.popularity}</td>
            </tr>
            <tr>
              <td className={s.propertyItem}>Original Title</td>
              <td className={s.originalTitle}>{movie.original_title}</td>
            </tr>
            <tr>
              <td className={s.propertyItem}>Genre</td>
              <td className={s.valueItem}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </td>
            </tr>
          </tbody>
        </table>

        <div className={s.aboutWrapper}>
          <h3 className={s.aboutHeader}>About</h3>
        </div>
        <p className={s.aboutText}>{movie.overview}</p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    popularity: PropTypes.number,
    original_title: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieInfo;
