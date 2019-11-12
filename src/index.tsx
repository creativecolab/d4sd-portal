import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore, { history } from "./store";

import SignupPage from "./containers/signup-page";

// @ts-ignore
const store = configureStore();

const App = () => {
  return (
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
};

ReactDOM.render(<App />, document.getElementById("root"));