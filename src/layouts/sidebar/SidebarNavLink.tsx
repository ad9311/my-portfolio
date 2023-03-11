import { NavLink } from 'react-router-dom';
import { SidebarNavLinkProps } from '../../types/sidebar';

function SidebarNavLink(props: SidebarNavLinkProps) {
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        `flex items-center ${isActive ? 'text-slate-900 font-bold' : 'text-white'}`
      }>
      <img className="w-5 mr-3" src={props.icon} alt={props.name} />
      <span className="font-medium">{props.text}</span>
    </NavLink>
  );
}

export default SidebarNavLink;
