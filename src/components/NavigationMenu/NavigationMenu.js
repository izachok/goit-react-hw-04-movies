import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './NavigationMenu.module.scss';

function NavigationMenu(props) {
  return (
    <div className={s.container}>
      <div className="container">
        <NavLink
          to="/"
          exact
          className={`navLink ${s.item}`}
          activeClassName="navLinkActive"
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          exact
          className={`navLink ${s.item}`}
          activeClassName="navLinkActive"
        >
          Movies
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationMenu;
