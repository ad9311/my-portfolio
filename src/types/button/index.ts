export const ButtonTheme = {
  BLUE: 'bg-blue-600',
  NEUTRAL: 'bg-neutral-600',
} as const;

interface ButtonProps {
  text: string;
  bgColor: keyof typeof ButtonTheme;
  link?: string;
  icon?: string;
}

export default ButtonProps;
