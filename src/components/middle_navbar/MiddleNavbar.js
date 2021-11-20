import React from 'react';
import { NavLink } from 'react-router-dom';

const MiddleNavbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Projects</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default MiddleNavbar;
