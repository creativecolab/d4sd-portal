import React from 'react';
import ReactDOM from 'react-dom';

import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";

const App = () => {
    return (
        <div>
            <LoginCard />
            <SignupCard />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
