import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// import configureStore, { history } from "./store";

import EthicsCard from "./components/ethics-card";
import LoginCard from "./components/login-card";
import Menubar from "./components/menubar";
import SignupCard from "./components/signup-card";
<<<<<<< HEAD
import SignUpLayout from "./components/layouts/signup-layout/index";

const App = () => {
  return (
    <div>
      <Menubar />
      <SignUpLayout />
    </div>
  );
};
=======
import SignUpLayout from './components/layouts/signup-layout/index';
import RoleCard from './components/role-card';

const App = () => {
    return (
        <div>
            <SignUpLayout />
        </div>
    )
}
>>>>>>> 032202b02522af9fd9d535bf63f4cd7b6ee173cd

ReactDOM.render(<App />, document.getElementById("root"));

{
  /* <Route path="/" component={HomePage} />
<Route path="/workspace" component={requireAuth(HomePage)} />
<Route path="/sign-up" component={HomePage} />
<Route path="/log-in" component={HomePage} />
 */
}
