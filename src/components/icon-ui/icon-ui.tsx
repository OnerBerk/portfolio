import './icon-ui.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Iicon} from '../../domain/domain';
import {useState} from 'react';
import {returnColors} from '../../utils/returnColors';
import {useNavigate} from 'react-router-dom';

const IconUi = ({icon, size, navigatePath, externalUrl, classname, theme, setPdf}: Iicon) => {
  const [enter, setEnter] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
    } else if (navigatePath) {
      navigate(navigatePath);
    } else if (setPdf) {
      setPdf(true);
    } else {
      console.log('Pas de Navigation');
    }
  };

  return (
    <FontAwesomeIcon
      style={{
        color: enter && theme ? returnColors(theme) : '',
        cursor: externalUrl || navigatePath || setPdf ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      size={size}
      icon={icon}
      className={`${classname}`}
      onClick={handleClick}
    />
  );
};
export default IconUi;
