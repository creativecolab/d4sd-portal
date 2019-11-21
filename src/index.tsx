import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './store';

import './styles/reset.css';
import SignupPage from './containers/signup-page';
import WorkspacePage from './containers/workspace-page'
import LoginPage from './containers/login-page';
import './index.less';

// @ts-ignore
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={SignupPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/workspace" component={WorkspacePage} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
