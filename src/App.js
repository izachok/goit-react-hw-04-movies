import './styles/main.scss';

import { Redirect, Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loading from './components/Loading/Loading';
import NavigationMenu from './components/NavigationMenu';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <div className="container">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
