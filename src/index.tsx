import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';

import Workspace from './components/layouts/workspace-layout';
import Login from './components/layouts/login-layout';
import Signup from './components/layouts/signup-layout';


import SignupPage from './containers/signup-page';

// @ts-ignore
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route path="/" component={SignupPage} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
