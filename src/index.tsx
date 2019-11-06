import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD

import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";
import Menubar from "./components/menubar"
=======
import Menubar from "./components/menubar"
import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";
import SignUpLayout from './components/layouts/signup-layout/index';
>>>>>>> 59d9eaef9ee2ba51457e16d8084fb095d85c2163

const App = () => {
    return (
        <div>
<<<<<<< HEAD
            <LoginCard />
            <SignupCard />
            <Menubar />
=======
            <Menubar />
            <SignUpLayout />
>>>>>>> 59d9eaef9ee2ba51457e16d8084fb095d85c2163
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
