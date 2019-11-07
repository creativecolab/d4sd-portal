import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import EthicsCard from "./components/ethics-card";
import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";
import SignUpLayout from './components/layouts/signup-layout/index';
import Menubar from './components/menubar';


const App = () => {
    return (
        <div>
            {/* <LoginLayout /> */}
            <Menubar/>
            <SignUpLayout/>
            <EthicsCard />
            <LoginCard />
            <SignupCard />
        </div>
    )
};
// const store = configureStore();
        
ReactDOM.render(<App />, document.getElementById("root"));
