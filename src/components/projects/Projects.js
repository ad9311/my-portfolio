import React, { useEffect, useState } from 'react';
import Project from './Project';
import ProjectsJSON from '../../json/projects.json';
import style from './Projects.module.css';

const Projects = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 250);
  }, []);

  const mapProjects = ProjectsJSON.map((project) => (
    <Project
      key={project.id}
      id={project.id}
      name={project.name}
      description={project.description}
      imgURL={project.imgURL}
      githubLink={project.gitHubLink}
      pageURL={project.pageURL}
    />
  ));

  return (
    <section className={
      show
        ? `${style.projects} ${style.projectsOn}`
        : style.projects
      }
    >
      {mapProjects}
    </section>
  );
};

export default Projects;
