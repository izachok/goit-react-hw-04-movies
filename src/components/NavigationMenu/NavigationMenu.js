import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationMenu(props) {
  return (
    <div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/movies" exact>
        Movies
      </NavLink>
    </div>
  );
}

export default NavigationMenu;
