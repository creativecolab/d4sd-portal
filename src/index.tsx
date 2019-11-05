import React from "react";
import ReactDOM from "react-dom";

import Menubar from "./components/menubar";
import LoginCard from "./components/login-card";
import SignupCard from "./components/signup-card";

const App = () => {
  return (
    <div>
      <Menubar />
      <LoginCard />
      <SignupCard />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
