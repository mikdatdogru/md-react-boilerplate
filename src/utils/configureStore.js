import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from '../redux/modules';

const configureStore = history => {
  const middlewares = [thunk, routerMiddleware(history)];
  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === 'development') {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      composed.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    } else {
      composed.push(devToolsEnhancer({ realtime: true }));
      console.log(
        '%c Go to url for see redux actions: http://remotedev.io/local/ ',
        'background: #222; color: #bada55;  padding:3px 1px',
      );
    }
  }

  const store = createStore(rootReducer, undefined, compose(...composed));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../redux/modules', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('../redux/modules').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
