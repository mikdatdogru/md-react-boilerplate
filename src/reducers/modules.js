import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import locale from './locale.reducers';
import { sampleData } from './common.reducers';

export default combineReducers({
  router: routerReducer,
  locale,
  sampleData,
});
