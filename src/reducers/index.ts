import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// eslint-disable-next-line
export default (history: any) => combineReducers({
  router: connectRouter(history)
});
