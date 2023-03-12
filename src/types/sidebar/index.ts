interface SidebarProps {
  type: 'MENU' | 'SIDEBAR';
  callback?: () => void;
}

export interface SidebarNavLinkProps {
  link: string;
  icon: string;
  name: string;
  text: string;
  callback?: () => void;
}

export interface SidebarIconLinkProps {
  link: string;
  icon: string;
  name: string;
}

export default SidebarProps;
