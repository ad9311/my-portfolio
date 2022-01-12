import React, { useEffect, useState } from 'react';
import style from './About.module.css';

const About = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 250);
  }, []);

  return (
    <article className={show ? `${style.aboutOn} ${style.about}` : style.about}>
      <div className={style.text}>
        <p>
          Hey there! My name is Ángel Díaz from Cartagena, Colombia,
          and I am a full-stack web developer looking for remote jobs.
        </p>
        <p>
          My previous studies include a Bachelor&apos;s degree in Electronic Engineering.
          I am always looking forward to acquiring new knowledge, so during the last year,
          I have built many projects in different languages and frameworks.
        </p>
      </div>
      <div className={style.skills}>
        <h3>Hard Skills</h3>
        <ul>
          <li>HTML5-CSS3</li>
          <li>JavaScript</li>
          <li>React/Redux</li>
          <li>Ruby</li>
          <li>RubyOnRails</li>
          <li>Linter tools</li>
          <li>Git and GitHub flow</li>
          <li>Visual Studio Code</li>
          <li>Vim</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Remote pair-programming</li>
          <li>Mentoring</li>
          <li>Stand up meetings</li>
        </ul>
      </div>
    </article>
  );
};

export default About;
