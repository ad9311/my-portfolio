import React from 'react';
import PropTypes from 'prop-types';
import Plus from '../../svg/light/plus.svg';
import style from './Projects.module.css';

const Project = (props) => {
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
    console.log(fmtID);
  };

  return (
    <article className={style.myProject} id={fmtID}>
      <div style={projectBg} className={style.projectBg}>
        <div className={style.details}>
          <div className={style.links}>
            <p>{description}</p>
            <a href={githubLink}>GitHub</a>
            <a href={pageURL}>Page</a>
          </div>
          <div className={style.name}>
            <h2>{name}</h2>
            <button
              className={style.moreBtn}
              type="button"
              onClick={moreHandle}
            >
              <img src={Plus} alt="more" />
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
