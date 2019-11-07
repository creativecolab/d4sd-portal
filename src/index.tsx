import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './store';

import Menubar from "./components/menubar";
import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";

// const store = configureStore();

const App = () => {
  return (
    <div>
      <Menubar />
      <LoginCard />
      <SignupCard />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
