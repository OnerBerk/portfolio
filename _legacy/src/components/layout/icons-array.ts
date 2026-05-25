import {faEllipsisVertical, faFingerprint, faHome, faStamp, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

import {Iicon} from '../../domain/domain';
export const IconArray: Iicon[] = [
  {icon: faStamp, classname: 'svg', navigatePath: '/'},
  {icon: faHome, classname: 'svg', navigatePath: '/home'},
  {icon: faFingerprint, classname: 'svg', navigatePath: '/projects'},
  {icon: faEnvelope, classname: 'svg', navigatePath: '/contact'},
  {icon: faLinkedin, classname: 'svg', externalUrl: 'https://www.linkedin.com/in/onerberk/'},
  {icon: faGithub, classname: 'svg', externalUrl: 'https://github.com/OnerBerk'},
  {icon: faEllipsisVertical, classname: 'svg'},
];
