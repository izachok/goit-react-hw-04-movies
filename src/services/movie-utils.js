import poster from '../images/icon-poster.png';
import profile from '../images/blank-profile-picture-300.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const BASE_WIDTH = 'w500';

function makePosterUrl(partialURL) {
  if (partialURL === null) {
    return poster;
  }
  return `${BASE_URL}${BASE_WIDTH}${partialURL}`;
}

function makeCastUrl(partialURL) {
  if (partialURL === null) {
    return profile;
  }
  return `${BASE_URL}w300${partialURL}`;
}

export { makePosterUrl, makeCastUrl };
