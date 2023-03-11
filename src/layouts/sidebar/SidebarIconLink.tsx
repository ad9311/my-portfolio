import { SidebarIconLinkProps } from '../../types/sidebar';

function SidebarIconLink(props: SidebarIconLinkProps) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="text-center">
      <img className="w-10 mx-auto" src={props.icon} alt={props.name} />
    </a>
  );
}

export default SidebarIconLink;
