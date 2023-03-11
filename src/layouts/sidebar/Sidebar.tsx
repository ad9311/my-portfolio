import { t } from 'i18next';
import appIcons from '../../assets/img/icons';
import SidebarProps, { SidebarIconLinkProps, SidebarNavLinkProps } from '../../types/sidebar';
import SidebarIconLink from './SidebarIconLink';
import SidebarNavLink from './SidebarNavLink';

const iconLinks: SidebarIconLinkProps[] = [
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

const navLinks: SidebarNavLinkProps[] = [
  {
    link: '/',
    icon: appIcons.person,
    text: t('pages.about') as string,
    name: 'about',
  },
  {
    link: '/portfolio',
    icon: appIcons.suitcase,
    text: t('pages.portfolio') as string,
    name: 'portfolio',
  },
  {
    link: '/resume',
    icon: appIcons.doc,
    text: t('pages.resume') as string,
    name: 'resume',
  },
  {
    link: '/contact',
    icon: appIcons.email,
    text: t('pages.contact') as string,
    name: 'contact',
  },
];

function Sidebar(props: SidebarProps) {
  const mapSMLinks = iconLinks.map(item => (
    <li key={`${props.type}-${item.name}`} className="w-fit mx-auto">
      <SidebarIconLink {...item} />
    </li>
  ));

  const mapnavLinks = navLinks.map(item => (
    <li key={`${props.type}-${item.name}`} className="mb-3">
      <SidebarNavLink {...item} />
    </li>
  ));

  return (
    <div
      className={`pt-10 px-3 bg-blue-700 ${
        props.type === 'MENU' ? 'max-w-[17.7rem] rounded-md shadow-4' : 'h-[100vh]'
      }`}>
      <p className="text-center text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolor molestias? Neque
        commodi odit nesciunt velit.
      </p>
      <ul className="w-40 mx-auto mt-8 grid grid-cols-3 items-center">{mapSMLinks}</ul>
      <div className="mt-8 lg:mt-44">
        <hr className="border-spacing-0 border-blue-900" />
        <nav>
          <ul className="w-40 mx-auto mt-8">{mapnavLinks}</ul>
        </nav>
        <hr className="mt-8 pb-8 border-spacing-0 border-blue-900" />
      </div>
    </div>
  );
}

export default Sidebar;
