import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import locale from './reducers/locale';

export default combineReducers({
  router: routerReducer,
  locale,
});
