import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";
import SignUpLayout from './components/layouts/signup-layout/index';

const App = () => {
    return (
        <div>
            <SignUpLayout />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
