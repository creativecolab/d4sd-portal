import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import { ConnectedRouter } from 'connected-react-router';
// import { Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import configureStore, { history } from './store';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Workspace from "./components/layouts/workspace-layout"
import Login from "./components/layouts/login-layout";
import Signup from "./components/layouts/signup-layout";
import configureStore, { history } from './store';

import EthicsCard from "./components/ethics-card";
import LoginCard from "./components/login-card";
import Menubar from "./components/menubar";
import SignupCard from "./components/signup-card";
import SignUpLayout from './components/layouts/signup-layout/index';
import RoleCard from './components/role-card';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Workspace}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </Switch>
  </Router>
  )
};

// const store = configureStore();
        
ReactDOM.render(<App />, document.getElementById("root"));
