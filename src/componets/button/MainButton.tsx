import { Link } from 'react-router-dom';
import ButtonProps, { ButtonTheme } from '../../types/button';

function MainButton(props: ButtonProps) {
  const icon = props.icon && <img src={props.icon} alt={props.text} className="w-5 mr-3" />;
  return (
    <button type="button" className={`text-white ${ButtonTheme[props.bgColor]} rounded-md`}>
      {props.link ? (
        <Link to={props.link} className="block px-4 py-2">
          <div className="flex items-center">
            {icon}
            {props.text}
          </div>
        </Link>
      ) : (
        <div className="px-5 py-3 flex items-center">
          {icon}
          {props.text}
        </div>
      )}
    </button>
  );
}

export default MainButton;
