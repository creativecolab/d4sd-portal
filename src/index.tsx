import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
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
import FeedbackPage from './components/layouts/feedback-layout'
import ViewFeedbackLayout from './components/layouts/view-feedback-layout';
import CommunityFeedbackLayout from './components/layouts/community-feedback-layout';
import PreliminarySubmissionPage from './components/layouts/preliminary-submission-layout';


// eslint-disable-next-line
// @ts-ignore
const store = configureStore();

const App = (): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
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
            <Route exact path="/workspace/community-feedback" component={CommunityFeedbackLayout} />
            <Route exact path="/resources" component={ResourcesPage} />
            <Route exact path="/resources/process" component={ProcessPage} />
            <Route exact path="/resources/stakeholder" component={StakeholderPage} />

            <Route exact path="/workspace/prelim" component={PreliminarySubmissionPage} />
            <Route exact path="/workspace/view-feedback" component={ViewFeedbackLayout} />
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
      </>
    </ConnectedRouter>
  </Provider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
