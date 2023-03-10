import { Link } from 'react-router-dom';
import ButtonProps from '../../types/button';

function ButtonPrimary(props: ButtonProps) {
  const icon = props.icon && <img src={props.icon} alt={props.text} />;
  return (
    <button type="button" className="text-white bg-blue-600 rounded-md">
      {props.link ? (
        <Link to={props.link} className="block px-5 py-3">
          {icon}
          {props.text}
        </Link>
      ) : (
        <div className="px-5 py-3">
          {icon}
          {props.text}
        </div>
      )}
    </button>
  );
}

export default ButtonPrimary;
