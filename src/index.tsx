import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Menubar from "./components/menubar"
import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";
import SignUpLayout from './components/layouts/signup-layout/index';

import LoginLayout from './components/layouts/login-layout/index';

const App = () => {
    return (
        <div>
            <Menubar />
            <LoginLayout />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
