// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './styles/main.scss';

import NavigationMenu from './components/NavigationMenu';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <div className="container">
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
        </Switch>
      </div>
    </div>
  );
}

export default App;
