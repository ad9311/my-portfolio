interface SidebarProps {
  type: 'MENU' | 'SIDEBAR';
}

export interface SidebarNavLinkProps {
  link: string;
  icon: string;
  name: string;
  text: string;
}

export interface SidebarIconLinkProps {
  link: string;
  icon: string;
  name: string;
}

export default SidebarProps;
