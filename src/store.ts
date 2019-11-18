import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState: any) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
      ),
    ),
  );
  return store;
}
