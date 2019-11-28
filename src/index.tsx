import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore, { history } from "./store";

import "./styles/reset.css";
import SignupPage from "./containers/signup-page";
import LoginPage from "./containers/login-page";
import HomePage from "./containers/home-page";
import InvolvedPage from "./containers/involved-page";
import AboutPage from "./containers/about-page";
import ChallengePage from "./containers/challenge-page";

import "./index.less";
import "./styles/reset.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Challenge from "./pages/Challenge";
// import Resources from "./pages/Resources";
// import FAQ from "./pages/FAQ";
// import Forum from "./pages/Forum";
// import Events from "./pages/Events";
// import Involve from "./pages/Involve";
// import Playbook from "./pages/Playbook";
// import PastSolution from "./pages/PastSolution";
// import Process from "./pages/Process";
// import Stakeholder from "./pages/Stakeholder";
// import Workspace from "./pages/workspace/Workspace";
// import SignupPage from './containers/signup-page';

// @ts-ignore
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/getinvolved" component={InvolvedPage} />
            <Route exact path="/challenges" component={ChallengePage} />
            <Route exact path="/about" component={AboutPage} />

            {/*            
            <Route exact path='/resources' component={Resources}/>
            <Route exact path='/faqs' component={FAQ}/>
            <Route exact path='/workspace' component={Workspace}/>

            Questionable/Non-relevant routes
            <Route exact path='/events' component={Events}/>
            <Route exact path='/solution' component={PastSolution}/>
            <Route exact path='/forum' component={Forum}/>
            <Route exact path='/involve/:role' component={Playbook}/>
            <Route exact path='/stakeholder' component={Stakeholder}/>
            <Route exact path='/process' component={Process}/>

            Fix to be more responsive:
            ~ Home, About, Get Involved
            ~ Go through all pages to fix fonts
              
            */}
            <Route exact path="/signup" component={SignupPage} />
            <Route exect path="/login" component={LoginPage} />
          </Switch>
        </main>
      </>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
