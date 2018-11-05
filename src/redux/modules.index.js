import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import locale from './modules/locale';
import sampleData from './modules/sample';

export default history =>
  combineReducers({
    router: connectRouter(history),
    locale,
    sampleData,
  });
