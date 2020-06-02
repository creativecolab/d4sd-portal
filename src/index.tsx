import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./index.less";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
import Loadable from "react-loadable";
import configureStore, { history } from "./store";

import Menubar from "./components/menubar";
import ScrollToTop from "./components/ScrollToTop";
import FeedbackProviderLayout from "./components/layouts/feedback-provider-layout";

const Loading = (): null => null; // loading component
const HomePage = Loadable({
  loader: () => import("./containers/home-page"),
  loading: Loading
});
const SignupPage = Loadable({
  loader: () => import("./containers/signup-page"),
  loading: Loading
});
const LoginPage = Loadable({
  loader: () => import("./containers/login-page"),
  loading: Loading
});
const InvolvedPage = Loadable({
  loader: () => import("./containers/involved-page"),
  loading: Loading
});
const AboutPage = Loadable({
  loader: () => import("./containers/about-page"),
  loading: Loading
});
const ChallengePage = Loadable({
  loader: () => import("./containers/challenge-page"),
  loading: Loading
});
const AttendPage = Loadable({
  loader: () => import("./containers/attend-page"),
  loading: Loading
});
const ResourcesPage = Loadable({
  loader: () => import("./containers/resources-page"),
  loading: Loading
});
const FAQPage = Loadable({
  loader: () => import("./containers/faq-page"),
  loading: Loading
});
const SponsorsPage = Loadable({
  loader: () => import("./containers/sponsors-page"),
  loading: Loading
});
const SubmitPage = Loadable({
  loader: () => import("./containers/submit-page"),
  loading: Loading
});
const RequestFeedbackPage = Loadable({
  loader: () => import("./containers/request-feedback-page"),
  loading: Loading
});
const SubmitProposalPage = Loadable({
  loader: () => import("./containers/submit-proposal-page"),
  loading: Loading
});
const ProcessPage = Loadable({
  loader: () => import("./components/layouts/process-layout"),
  loading: Loading
});
const StakeholderPage = Loadable({
  loader: () => import("./components/layouts/stakeholder-layout"),
  loading: Loading
});
const FeedbackPage = Loadable({
  loader: () => import("./components/layouts/feedback-layout"),
  loading: Loading
});
const FeedbackTablePage = Loadable({
  loader: () => import("./components/layouts/feedbacktable-layout"),
  loading: Loading
});
const CovidPage = Loadable({
  loader: () => import("./components/layouts/covid-layout"),
  loading: Loading
});
const ChallengeInternalLayout = Loadable({
  loader: () => import("./components/layouts/challenge-internal-layout"),
  loading: Loading
});
const JoinDesignJam = Loadable({
  loader: () => import("./components/layouts/design-jam"),
  loading: Loading
});

const EntriesLayout = Loadable({
  loader: () => import("./components/layouts/entries-layout"),
  loading: Loading
})
// const ViewFeedbackLayout = Loadable({
//   loader: () => import('./components/layouts/view-feedback-layout'),
//   loading: Loading
// });
const CommunityFeedbackLayout = Loadable({
  loader: () => import("./components/layouts/community-feedback-layout"),
  loading: Loading
});
const CommunityFeedbackSingleLayout = Loadable({
  loader: () => import("./components/layouts/community-feedback-single-layout"),
  loading: Loading
});
// const PreliminarySubmissionPage = Loadable({
//   loader: () => import('./components/layouts/preliminary-submission-layout'),
//   loading: Loading
// });

// eslint-disable-next-line
// @ts-ignore
const store = configureStore();

const App = (): JSX.Element => {
  // eslint-disable-next-line
  const logPageView = (location: any): void => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  };

  useEffect(() => {
    // eslint-disable-next-line
    // @ts-ignore
    ReactGA.initialize("UA-90860713-2");
    // eslint-disable-next-line
    history.listen((location: any) => {
      logPageView(location);
    });
    logPageView(history.location);
  }, []);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <main>
          <Menubar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/volunteer" component={InvolvedPage} />
            <Route
              exact
              path="/volunteer/feedback_provider"
              component={FeedbackPage}
            />
            <Route exact path="/challenges" component={ChallengePage} />
            <Route exact path="/attend" component={AttendPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/sponsor" component={SponsorsPage} />
            <Route exact path="/faq" component={FAQPage} />
            <Route exact path="/resources" component={ResourcesPage} />
            <Route exact path="/resources/process" component={ProcessPage} />
            <Route
              exact
              path="/resources/stakeholder"
              component={StakeholderPage}
            />
            <Route exact path="/entries" component = {EntriesLayout} />
            <Route exact path="/submit" component={SubmitPage} />
            <Route
              exact
              path="/submit/request-feedback"
              component={RequestFeedbackPage}
            />
            <Route
              exact
              path="/submit/submit-proposal"
              component={SubmitProposalPage}
            />
            <Route exact path="/covid19" component={CovidPage} />
            <Route
              exact
              path="/volunteer/provide_feedback/:id"
              component={FeedbackProviderLayout}
            />
            <Route
              exact
              path="/volunteer/feedback_table"
              component={FeedbackTablePage}
            />
            <Route
              path="/challenges/:type/:title"
              component={ChallengeInternalLayout}
            />
            <Route
              exact
              path="/submit/join-a-design-jam"
              component={JoinDesignJam}
            />
            <Route
              exact
              path="/community-feedback/:id"
              component={CommunityFeedbackLayout}
            />
            <Route
              exact
              path="/community-feedback/:id/:feedbackID"
              component={CommunityFeedbackSingleLayout}
            />
            {/*
              <Route
                exact
                path="/workspace/prelim"
                component={PreliminarySubmissionPage}
              />
              <Route
                exact
                path="/workspace/view-feedback"
                component={ViewFeedbackLayout}
              />
              <Route
                exact
                path="/workspace/community-feedback"
                component={CommunityFeedbackLayout}
              />
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
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
