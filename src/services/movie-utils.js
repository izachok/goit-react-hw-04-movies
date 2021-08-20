import poster from '../images/icon-poster.png';

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
    return poster;
  }
  return `${BASE_URL}w200${partialURL}`;
}

function makeGenresList(arrStrName) {
  if (!Array.isArray(arrStrName)) return '';
  if (arrStrName.length > 2) {
    return `${arrStrName[0]}, ${arrStrName[1]}, Other`;
  }
  return arrStrName.join(', ');
}

export { makePosterUrl, makeCastUrl };
