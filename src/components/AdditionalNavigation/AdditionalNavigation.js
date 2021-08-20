import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

function AdditionalNavigation() {
  const { url } = useRouteMatch();

  return (
    <div>
      <h2>Additional information</h2>
      <ul className="list">
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalNavigation;
