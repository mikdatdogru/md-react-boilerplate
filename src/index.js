import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'animate.css/animate.css';
import 'react-toastify/dist/ReactToastify.min.css';

import configureStore from './redux/configureStore';
import theme from './theme';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

export const history = createBrowserHistory();
export const store = configureStore(history);

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
