import def from './default.svg';
import arrow from './arrow.svg';
import css3 from './css3.svg';
import doc from './doc.svg';
import html5 from './html5.svg';
import js from './js.svg';
import psql from './psql.svg';
import rails from './rails.svg';
import react from './react.svg';
import redux from './redux.svg';
import ruby from './ruby.svg';
import sass from './sass.svg';
import ts from './ts.svg';

const appIcons = {
  def,
  arrow,
  css3,
  doc,
  html5,
  js,
  psql,
  rails,
  react,
  redux,
  ruby,
  sass,
  ts,
};

export function findIcon(name: string) {
  const icon = Object.entries(appIcons).find(entry => entry[0] === name);
  if (icon) {
    return icon[1];
  }
  return appIcons.def;
}

export default appIcons;
