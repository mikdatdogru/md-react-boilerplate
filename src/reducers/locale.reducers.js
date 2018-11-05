import { LOCALE_SET } from '../actions/types';

export default function locale(state = { lang: 'tr' }, action = {}) {
  switch (action.type) {
    case LOCALE_SET:
      return action;
    default:
      return state;
  }
}
