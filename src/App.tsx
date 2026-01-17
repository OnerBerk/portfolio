import React, {useCallback} from 'react';

import {RouterProvider} from 'react-router-dom';
import {router} from './pages/router/router';
import {IntlProvider} from 'react-intl';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {SpeedInsights} from '@vercel/speed-insights/react';
import {RootState} from './redux/store/store';
import {useSelector} from 'react-redux';

import {Lang} from './domain/domain';

import enMessages from './lang/en.json';
import frMessages from './lang/fr.json';
import muiTheme from './theme/mui-theme';

function App() {
  const locale = 'fr';
  const lang = useSelector((state: RootState) => state.langReducer?.lang);

  const messages = useCallback(() => {
    return lang === Lang.en ? enMessages : frMessages;
  }, [lang]);
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <IntlProvider locale={locale} messages={messages()}>
        <RouterProvider router={router} />
        <SpeedInsights />
      </IntlProvider>
    </ThemeProvider>
  );
}
export default App;
