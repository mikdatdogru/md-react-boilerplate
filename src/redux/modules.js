import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import locale from './reducers/locale';
import { sampleReducer } from './reducers/common';

export default combineReducers({
  router: routerReducer,
  locale,
  sampleReducer,
});
