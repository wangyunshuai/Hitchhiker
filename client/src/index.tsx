import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import * as l from './locales/lang';
import App from './App';
import LocalStore from './utils/local_store';
import { addLocaleData, IntlProvider } from 'react-intl';
import { GlobalVar } from './utils/global_var';

const appLocale = l.language[GlobalVar.instance.lang] || l.language['en'];

addLocaleData(appLocale.data);

LocalStore.init();

ReactDOM.render(
  <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);