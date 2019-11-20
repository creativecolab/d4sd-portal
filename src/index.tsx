import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './store';

import './styles/reset.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Challenge from "./pages/Challenge";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Forum from "./pages/Forum";
import Events from "./pages/Events";
import Involve from "./pages/Involve";
import Playbook from "./pages/Playbook";
import PastSolution from "./pages/PastSolution";
import Process from "./pages/Process";
import Stakeholder from "./pages/Stakeholder";
import Workspace from "./pages/workspace/Workspace";
import SignupPage from './containers/signup-page';
import './index.less';
// @ts-ignore
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/challenge' component={Challenge}/>
          <Route exact path='/process' component={Process}/>
          <Route exact path='/resources' component={Resources}/>
          <Route exact path='/solution' component={PastSolution}/>
          <Route exact path='/faq' component={FAQ}/>
          <Route exact path='/forum' component={Forum}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/getinvolved' component={Involve}/>
          <Route exact path='/involve/:role' component={Playbook}/>
          <Route exact path='/workspace' component={Workspace}/>
          <Route exact path='/stakeholder' component={Stakeholder}/>
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </main>
      </>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
