import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './store';

import EthicsCard from "./components/ethics-card";
import LoginCard from "./components/login-card";
import Menubar from "./components/menubar";
import SignupCard from "./components/signup-card";
import SignupChoice from "./components/signup-choice";
const App = () => {
    return (
        <div>
          <Menubar />
          <SignupChoice />
            <LoginCard />
            <SignupCard />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
