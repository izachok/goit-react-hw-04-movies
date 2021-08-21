import { NavLink, useRouteMatch } from 'react-router-dom';

import React from 'react';
import s from './AdditionalNavigation.module.scss';

function AdditionalNavigation() {
  const { url } = useRouteMatch();

  return (
    <div>
      <h2>Additional information</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={`${url}/cast`}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to={`${url}/reviews`}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalNavigation;
