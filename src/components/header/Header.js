import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectProject, updateTarget } from '../../redux/projects/projectsSlice';
import style from './Header.module.css';
import EMSVG from '../../svg/dark/email.svg';
import GHSVG from '../../svg/dark/github.svg';
import INSVG from '../../svg/dark/linkedin.svg';

const Header = () => {
  const dispatch = useDispatch();
  const { selected, target } = useSelector((state) => state.projects);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      setTimeout(() => setShow(true), 150);
      document.getElementById('root').addEventListener('click', (e) => {
        dispatch(updateTarget(e.target));
      });
    }

    const container = document.getElementById(selected);

    if (container !== null) {
      if (!container.contains(target)) {
        dispatch(selectProject('default'));
      }
    }
  }, [target]);

  return (
    <header className={
      show
        ? `${style.header} ${style.headerOn}`
        : style.header
      }
    >
      <div className={style.profileContainer}>
        <img
          className={style.profileImg}
          src={process.env.REACT_APP_PROFILE}
          alt="profile"
        />
        <h2>Ángel D.R.</h2>
        <div className={style.topIcons}>
          <NavLink to="/contact"><img src={EMSVG} alt="email" /></NavLink>
          <a href="https://github.com/ad9311"><img src={GHSVG} alt="github" /></a>
          <a href="https://www.linkedin.com/in/ad9311/"><img src={INSVG} alt="linkedin" /></a>
        </div>
      </div>
      <div className={style.infoContainer}>
        <h2>Ángel D.R.</h2>
        <h1>Full Stack Developer</h1>
        <NavLink to="/contact">
          <button className={style.contactBtn} type="button">
            Let&apos;s Work Together
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
