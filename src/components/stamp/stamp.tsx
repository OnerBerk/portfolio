import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import './stamp.scss';
import {defineMessages, useIntl} from 'react-intl';

const messages = defineMessages({
  title: {
    defaultMessage: 'Full-stack developer',
    id: 'stamp.title',
  },
});

const Stamp = () => {
  const intl = useIntl();
  return (
    <div className='stampMain'>
      <div
        style={{
          border: '6px',
          borderStyle: 'solid',
        }}
        className='stampBody'>
        <div className='stampRight'>
          <div className='stampTitle'>{intl.formatMessage(messages.title)}</div>
          <div className='stampRightDividor'>
            <span
              style={{
                borderBottom: 6,
                borderBottomStyle: 'solid',
              }}
            />
            <div>
              <FontAwesomeIcon className='socialIcon' icon={faStar} />
            </div>
            <span
              style={{
                borderBottom: 6,
                borderBottomStyle: 'solid',
              }}
            />
          </div>
          <div className='stampName'>
            <div className='lastname'>ÖNER</div>
            <div className='firstname'>BERK</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stamp;
