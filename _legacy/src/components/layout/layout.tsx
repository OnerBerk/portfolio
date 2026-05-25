import {useCallback, useMemo} from 'react';

import {Outlet} from 'react-router-dom';

import useAppDispatch from '../../hook/useAppDispatch';
import {RootState} from '../../redux/store/store';
import {useSelector} from 'react-redux';

import {ThemeEnum} from '../../domain/domain';

import yellowDot from '../../assets/yellow-dot.svg';
import lightDot from '../../assets/light-dot.svg';
import darkDot from '../../assets/dot.svg';

import {IconArray} from './icons-array';
import IconUi from '../icon-ui/icon-ui';

import {returnBackground} from '../../utils/return-background';
import {returnTheme} from '../../utils/return-theme';

import './layout.scss';
import {changeTheme} from '../../redux/actions/theme/theme-action';
import {Box} from '@mui/material';

const Layout = () => {
  const dispatch = useAppDispatch();
  const year = new Date().getFullYear();

  const reducerTheme = useSelector((state: RootState) => state.themeReducer.theme);
  const localTheme = localStorage.getItem('theme');

  const handleChangeTheme = useCallback(
    (color: ThemeEnum) => () => {
      dispatch(changeTheme(color));
    },
    [dispatch]
  );

  const theme = useMemo((): ThemeEnum => {
    if (reducerTheme) {
      return reducerTheme;
    } else {
      if (localTheme === 'light') {
        return ThemeEnum.light;
      } else if (localTheme === 'dark') {
        return ThemeEnum.dark;
      } else if (localTheme === 'yellow') {
        return ThemeEnum.yellow;
      } else return ThemeEnum.dark;
    }
  }, [reducerTheme, localTheme]);

  return (
    <div className={`layout-main ${returnTheme(theme)}`}>
      <img className='background' alt={returnBackground(theme).toString()} src={returnBackground(theme)} />

      <div className='l'>
        <Box height={50} position='absolute' p={5} top={0} right={0}>
          <div className='top-right'>
            <img alt='dark theme' src={darkDot} onClick={handleChangeTheme(ThemeEnum.dark)} />
            <img alt='light theme' src={lightDot} onClick={handleChangeTheme(ThemeEnum.light)} />
            <img alt='yellow theme' src={yellowDot} onClick={handleChangeTheme(ThemeEnum.yellow)} />
          </div>
        </Box>

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
                    externalUrl={f.externalUrl && f.externalUrl}
                  />
                );
              })}
            </div>
          </div>
          <span className='date'>{`Öner Berk -- ${year}`}</span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Layout;
