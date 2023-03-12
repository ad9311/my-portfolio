import def from './default.svg';
import arrow from './arrow.svg';
import css3 from './css3.svg';
import doc from './doc.svg';
import email from './email.svg';
import github from './github.svg';
import html5 from './html5.svg';
import js from './js.svg';
import linkedin from './linkedin.svg';
import menu from './menu.svg';
import person from './person.svg';
import psql from './psql.svg';
import rails from './rails.svg';
import react from './react.svg';
import redux from './redux.svg';
import ruby from './ruby.svg';
import sass from './sass.svg';
import suitcase from './suitcase.svg';
import tailwindcss from './tailwindcss.svg';
import ts from './ts.svg';
import twitter from './twitter.svg';

const appIcons = {
  def,
  arrow,
  css3,
  doc,
  email,
  github,
  html5,
  js,
  linkedin,
  menu,
  person,
  psql,
  rails,
  react,
  redux,
  ruby,
  sass,
  suitcase,
  tailwindcss,
  ts,
  twitter,
};

export function findIcon(name: string) {
  const icon = Object.entries(appIcons).find(entry => entry[0] === name);
  if (icon) {
    return icon[1];
  }
  return appIcons.def;
}

export default appIcons;
