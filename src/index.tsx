import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { message } from '@d4sd/components';
import { UserProvider } from './UserContext';
import { getCookie, setCookie } from './utils';

import configureStore, { history } from './store';
import SignupPage from './containers/signup-page';
import LoginPage from './containers/login-page';
import HomePage from './containers/home-page';
import InvolvedPage from './containers/involved-page';
import AboutPage from './containers/about-page';
import ChallengePage from './containers/challenge-page';
import ResourcesPage from './containers/resources-page';
import FAQPage from './containers/faq-page';
import SponsorsPage from './containers/sponsors-page';
import WorkspacePage from './containers/workspace-page';
import ProcessPage from './components/layouts/process-layout';
import StakeholderPage from './components/layouts/stakeholder-layout';
import FeedbackPage from './components/layouts/feedback-layout';

import PreliminarySubmissionPage from './components/layouts/preliminary-submission-layout';


import './index.less';

// eslint-disable-next-line
// @ts-ignore
const store = configureStore();

const App = (): JSX.Element => {
  const [user, setUser] = useState({ loggedIn: false, token: '', username: '' });

  useEffect(() => {
    // temp
    setCookie('d4sdLoginToken', 'randomtoken', 7); // 7 day expiration date
    const loginToken = getCookie('d4sdLoginToken');
    const verified = true;
    // verify token
    if (verified) {
      setUser({ loggedIn: true, username: 'Daniel', token: loginToken });
    }
  }, []);

  function LoginRequire(component: any) {

    if (user.loggedIn) {
      return component;
    }

    message.info('You need to login first!');
    return <Redirect to="/" />;
  }
  return (

    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <UserProvider value={{ user, setUser }}>
            <main>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/getinvolved" component={InvolvedPage} />
                <Route exact path="/getinvolved/feedback_provider" component={FeedbackPage} />
                <Route exact path="/challenges" component={ChallengePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/sponsors" component={SponsorsPage} />
                <Route exact path="/faq" component={FAQPage} />
                <Route exact path="/workspace" component={WorkspacePage} />
                <Route exact path="/resources" component={ResourcesPage} />
                <Route exact path="/resources/process" component={ProcessPage} />
                <Route exact path="/resources/stakeholder" component={StakeholderPage} />

                <Route exact path="/workspace/prelim" component={() => LoginRequire(PreliminarySubmissionPage)} />
                {/*
            <Route exact path='/resources' component={Resources}/>
            <Route exact path='/workspace' component={Workspace}/>

            Questionable/Non-relevant routes
            <Route exact path='/events' component={Events}/>
            <Route exact path='/solution' component={PastSolution}/>
            <Route exact path='/forum' component={Forum}/>
            <Route exact path='/involve/:role' component={Playbook}/>
            <Route exact path='/stakeholder' component={Stakeholder}/>
            <Route exact path='/process' component={Process}/>

            Fix to be more responsive:
            ~ Home
            ~ Go through all pages to fix fonts
            */}
                <Route exact path="/signup" component={SignupPage} />
                <Route exect path="/login" component={LoginPage} />
              </Switch>
            </main>
          </UserProvider>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
