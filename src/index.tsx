import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';

import './styles/reset.css';
import SignupPage from './containers/signup-page';
import LoginPage from './containers/login-page';
import './index.less';

// @ts-ignore
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          {/* {loggedin ? <Redirect to="/signup" /> : <Redirect to="/home" />} */}
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
