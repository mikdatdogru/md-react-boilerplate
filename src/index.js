import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support

import 'bootstrap/dist/css/bootstrap.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'animate.css/animate.css';
import 'react-toastify/dist/ReactToastify.min.css';

import configureStore from './utils/configureStore';
import theme from './utils/theme';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const { basePath } = window.env;
export const history = createBrowserHistory({
  basename: basePath,
});
export const store = configureStore(undefined, history);

/* istanbul ignore if */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/App', () => {
    // eslint-disable-next-line
    const NextApp = require('./containers/App').default;
    // eslint-disable-next-line
    render(NextApp);
  });
}

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

registerServiceWorker();
