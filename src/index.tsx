import './index.css';
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
import SignUpLayout from './components/layouts/signup-layout/index';
import RoleCard from './components/role-card';

const App = () => {
    return (
        <div>
            <SignUpLayout />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
