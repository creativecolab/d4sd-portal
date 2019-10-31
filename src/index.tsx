import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login-card/index';
import SignUp from './components/sign-up-card/index';
import * as serviceWorker from './serviceWorker';
import LoginCard from "./components/login-card"

const App: React.FC = () => {
    return (
      <div className="App">
        <LoginCard />
      </div>
    );
  }
  

ReactDOM.render(<App />, document.getElementById('root'));

