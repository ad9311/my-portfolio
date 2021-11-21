import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectProject } from '../../redux/projects/projectsSlice';
import Plus from '../../svg/light/plus.svg';
import Minus from '../../svg/light/minus.svg';
import style from './Projects.module.css';

const Project = (props) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.projects);
  const {
    id,
    name,
    description,
    imgURL,
    githubLink,
    pageURL,
  } = props;
  const fmtID = id.replace('/', '-');
  const projectBg = {
    backgroundImage: `url(${imgURL})`,
  };

  const moreHandle = () => {
    if (selected === fmtID) {
      dispatch(selectProject('default'));
    } else {
      dispatch(selectProject(fmtID));
    }
  };

  return (
    <article id={fmtID}>
      <div className={style.myProjects}>
        <div style={projectBg} className={style.projectBg}>
          <div
            className={
            selected !== fmtID
              ? style.links
              : `${style.links} ${style.linksOn}`
            }
          >
            <div className={style.desc}>
              <p>{description}</p>
            </div>
            <div className={style.linksGroup}>
              <a href={githubLink}>GitHub</a>
              {pageURL !== '' ? <a href={pageURL}>Page</a> : ''}
            </div>
          </div>
          <div className={style.name}>
            <h2>{name}</h2>
            <button
              type="button"
              className={style.moreBtn}
              onClick={moreHandle}
            >
              <img
                id={fmtID}
                src={
                  selected === fmtID
                    ? Minus
                    : Plus
                }
                alt="more"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  imgURL: PropTypes.string,
  githubLink: PropTypes.string,
  pageURL: PropTypes.string,
};

Project.defaultProps = {
  id: '',
  name: '',
  description: '',
  imgURL: '',
  githubLink: '',
  pageURL: '',
};

export default Project;
