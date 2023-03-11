import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import appIcons from '../../assets/img/icons';
import SidebarProps from '../../types/sidebar';

const socialMediaLinks = [
  {
    link: 'https://github.com/ad9311',
    icon: appIcons.github,
    name: 'github',
  },
  {
    link: 'https://linkedin.com/in/ad9311',
    icon: appIcons.linkedin,
    name: 'linkedin',
  },
  {
    link: 'https://twitter.com',
    icon: appIcons.twitter,
    name: 'twitter',
  },
];

const sidebarLinks = [
  {
    link: '/',
    icon: appIcons.person,
    text: t('pages.about'),
    name: 'about',
  },
  {
    link: '/portfolio',
    icon: appIcons.suitcase,
    text: t('pages.portfolio'),
    name: 'portfolio',
  },
  {
    link: '/resume',
    icon: appIcons.doc,
    text: t('pages.resume'),
    name: 'resume',
  },
  {
    link: '/contact',
    icon: appIcons.email,
    text: t('pages.contact'),
    name: 'contact',
  },
];

function Sidebar(props: SidebarProps) {
  const mapSMLinks = socialMediaLinks.map(item => (
    <li key={`${props.type}-${item.name}`} className="w-fit mx-auto">
      <a href={item.link} target="_blank" rel="noreferrer">
        <img className="w-10" src={item.icon} alt={item.name} />
      </a>
    </li>
  ));

  const mapSidebarLinks = sidebarLinks.map(item => (
    <li key={`${props.type}-${item.name}`} className="mb-3">
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          `flex items-center ${isActive ? 'text-slate-900' : 'text-white'}`
        }>
        <img className="w-5 mr-3" src={item.icon} alt={item.name} />
        <span className="font-medium">{item.text}</span>
      </NavLink>
    </li>
  ));

  return (
    <div
      className={`pt-10 px-3 bg-blue-700 ${
        props.type === 'MENU' ? 'max-w-sm rounded-tr-md rounded-br-md' : 'sticky h-full top-0 left-0 bottom-0'
      }`}>
      <p className="text-center text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolor molestias? Neque
        commodi odit nesciunt velit.
      </p>
      <ul className="w-40 mx-auto my-8 grid grid-cols-3 items-center">{mapSMLinks}</ul>
      <hr className="border-spacing-0 border-blue-900" />
      <nav>
        <ul className="w-40 mx-auto mt-8">{mapSidebarLinks}</ul>
      </nav>
      <hr className="mt-8 pb-8 border-spacing-0 border-blue-900" />
    </div>
  );
}

export default Sidebar;
