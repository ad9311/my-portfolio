import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './MiddleNavbar.module.css';

const MiddleNavbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 150);
  }, []);

  const links = [
    {
      path: '/',
      name: 'Projects',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
  ];

  const mapLinks = links.map((link) => (
    <li key={link.path}>
      <NavLink
        to={link.path}
        className={style.navLink}
      >
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={
      show
        ? `${style.middleNavbar} ${style.middleNavbarOn}`
        : style.middleNavbar
      }
    >
      <ul>
        {mapLinks}
      </ul>
    </nav>
  );
};

export default MiddleNavbar;
