import React from 'react';
import ReactDOM from 'react-dom';

import LoginCard from "./components/login-card"

const App: React.FC = () => {
    return (
      <div className="App">
        <LoginCard />
      </div>
    );
  }
  

ReactDOM.render(<App />, document.getElementById('root'));
