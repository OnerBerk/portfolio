import {useCallback, useState} from 'react';

import {Link, Outlet} from 'react-router-dom';

import useAppDispatch from '../../hook/useAppDispatch';
import {changeLang} from '../../redux/actions/lang/lang-action';
import {RootState} from '../../redux/store/store';
import {useSelector} from 'react-redux';

import {Lang, ThemeEnum} from '../../domain/domain';

import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import enFlag from '../../../src/assets/united-kingdom.png';
import yellowDot from '../../assets/yellow-dot.svg';
import frFlag from '../../../src/assets/france.png';
import lightDot from '../../assets/light-dot.svg';
import darkDot from '../../assets/dot.svg';

import {IconButton} from '@mui/material';
import {IconArray} from './icons-array';
import IconUi from '../icon-ui/icon-ui';

import {returnBackground} from '../../utils/return-background';
import {returnTheme} from '../../utils/return-theme';

import Grid from '@mui/material/Grid';

import './layout.scss';

const Layout = () => {
  const dispatch = useAppDispatch();
  const year = new Date().getFullYear();

  const lang = useSelector((state: RootState) => state.lang?.lang);
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.dark);

  const handleChangeLang = useCallback(
    (lang: Lang) => {
      dispatch(changeLang(lang));
    },
    [dispatch]
  );

  const handleChangeTheme = useCallback(
    (color: ThemeEnum) => () => {
      setTheme(color);
    },
    []
  );

  return (
    <div className={`layout-main ${returnTheme(theme)}`}>
      <img
        className='background'
        alt={returnBackground(theme).toString()}
        src={returnBackground(theme)}
      />
      <div className='l'>
        <div className={'top-block'}>
          <div>
            <div className='top-ligne' />
            <Grid container pl={2}>
              <Grid item width='40px'>
                <IconButton onClick={() => handleChangeLang(Lang.fr)}>
                  <img
                    width='100%'
                    alt='french flag'
                    className={`flag ${lang === Lang.fr ? '' : 'dimmed'}`}
                    src={frFlag}
                  />
                </IconButton>
              </Grid>
              <Grid item width='40px'>
                <IconButton onClick={() => handleChangeLang(Lang.en)}>
                  <img
                    className={`flag ${lang === Lang.en ? '' : 'dimmed'}`}
                    width='100%'
                    alt='english flag'
                    src={enFlag}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div className='top-right'>
            <img
              onClick={handleChangeTheme(ThemeEnum.dark)}
              style={{objectFit: 'cover'}}
              alt='dark theme'
              src={darkDot}
            />
            <img
              alt='light theme'
              src={lightDot}
              onClick={handleChangeTheme(ThemeEnum.light)}
            />
            <img
              alt='yellow theme'
              src={yellowDot}
              onClick={handleChangeTheme(ThemeEnum.yellow)}
            />
          </div>
        </div>
        <div className='left-block'>
          <div className='top-left'>
            <div className='layout-nav'>
              {IconArray.map((f, i) => {
                return (
                  <IconUi
                    key={i}
                    theme={returnTheme(theme)}
                    icon={f.icon}
                    classname={f.classname}
                    size={f.size}
                    navigatePath={f.navigatePath && f.navigatePath}
                  />
                );
              })}
            </div>
          </div>
          <span className='date'>{`Öner Berk -- ${year}`}</span>
        </div>
        <div className='bottom-block'>
          <Link
            className='link-a'
            to='https://www.linkedin.com/in/onerberk/'
            target='_blank'>
            <IconUi theme={returnTheme(theme)} icon={faLinkedin} />
          </Link>
          <Link
            className='link-a'
            to='https://github.com/OnerBerk'
            target='_blank'>
            <IconUi theme={returnTheme(theme)} icon={faGithub} />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;
