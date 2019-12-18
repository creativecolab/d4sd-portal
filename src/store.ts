import thunk from 'redux-thunk';
import {
  applyMiddleware, compose, createStore, Store, AnyAction
} from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, RouterState } from 'connected-react-router';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

/* eslint-disable */
type StoreType = Store<{
  router: RouterState<any>;
}, AnyAction> & {
  dispatch: {};
}
/* eslint-enable */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function configureStore(preloadedState: any): StoreType {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  );
  return store;
}
