import React, { useState } from "react";
import { Row, Col, Card, Collapse } from "@d4sd/components";
import Menubar from "../../menubar/index";
import "./style.less";

const { Meta } = Card;
const { Panel } = Collapse;

const FaqLayout = (props: any) => {
  return (
    <div>
      <Menubar />
      <div className="FaqLayout">
        <Row className="landing-div" type="flex" justify="center">
          <Col span="20">
            <h2>Frequently Asked Questions</h2>
          </Col>
          <Col xs={{ span: 14 }} md={{ span: 14 }}>
            <p>
              Find answers to some of your questions below. If you still have a
              question that we did not address, please reach out by email at
              <a href="mailto:team@d4sd.org"> team@d4sd.org</a> and we will do
              our best to respond quickly.
            </p>
          </Col>
        </Row>

        <div className="faq-cards">
          <Collapse accordion>
            <Panel header="What is D4SD?" key="1" className="panel-style">
              <p>
                Design for San Diego (D4SD) is a civic design initiative that
                brings together innovators, mentors, experts, and citizens to
                address San Diego’s most challenging issues through
                human-centered design. Our aim is to provide a space that allows
                for the community to discover key civic issues, to ideate and
                prototype solutions to the problems they see, to pitch their
                proposals in a public forum, and to activate others to help
                bring them to life.
              </p>
              <p>
                This year’s theme— How can we make San Diego a more sustainable
                city— is rooted in the United Nations’ 2030 vision to transform
                our world by making cities inclusive, safe, resilient and
                sustainable. D4SD has organized the challenges around four main
                topics, but you are welcome to explore anything related to
                sustainability:
              </p>
              <ul>
                <li>Housing</li>
                <li>Mobility</li>
                <li>Health</li>
                <li>Climate</li>
              </ul>
            </Panel>
            <Panel
              header="Why should I participate in D4SD?"
              key="2"
              className="panel-style"
            >
              <p>
                Join D4SD for this unique opportunity to collaborate and compete
                with other city innovators to help address
                sustainability-related issues facing San Diego and cities around
                the world. The best proposals will be rewarded with financial
                and mentoring resources to further develop their ideas into
                reality.
              </p>
              <p>Participants may benefit from:</p>
              <ul>
                <li>
                  Solving real problems and inspiring change in your community.
                </li>
                <li>
                  Learning human-centered design practices from professional
                  designers and educators in the UC San Diego Design Lab.
                </li>
                <li>
                  Working with real data and collaborate with the City of San
                  Diego's data portal and award-winning Performance and
                  Analytics Department.
                </li>
                <li>
                  Making new connections through networking opportunities with
                  designers, engineers, data scientists, civic leaders,
                  entrepreneurs, and other innovators.
                </li>
                <li>
                  Earning resources and building alliances to help develop your
                  team’s proposal into a startup business, an infrastructure
                  development, or a policy proposal.
                </li>
              </ul>
            </Panel>
            <Panel
              header="How can I get started?"
              key="3"
              className="panel-style"
            >
              <p>
                Our goal is to motivate and support citizens in learning how to
                use human-centered design to truly understand issues facing our
                region and to creatively generate solutions that could improve
                sustainability in San Diego. There’s many ways to get started:
              </p>
              <ul>
                <li>
                  You can learn more about the D4SD sustainability topics on the{" "}
                  <a href="/challenges">Challenges page</a>.
                </li>
                <li>
                  You can also
                  <a href="http://eepurl.com/c2kFon" target="_blank">
                    sign up to be on our mailing list
                  </a>
                  and to volunteer for other roles as part of the challenge.
                </li>
                <li>
                  You can chat online with other innovators, experts, and
                  citizens through our
                  <a
                    href="https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU"
                    target="_blank"
                  >
                    D4SD Slack forum
                  </a>
                  .
                </li>
                <li>
                  You can attend one of the in-person events to help you connect
                  with other innovators and to get mentorship from design
                  practitioners.
                </li>
                <li>
                  You can read up on human-centered design, get advice on
                  building stakeholder relationships, and see example solutions
                  on the <a href="/resources">Resources page</a>.
                </li>
              </ul>
            </Panel>
            <Panel
              header="How do I form teams?"
              key="4"
              className="panel-style"
            >
              <p>
                While you do not need a team to enter the D4SD challenge, a team
                can help you build your good idea into a great solution. An
                effective team is one that has a mix of diverse talents all
                striving towards a common goal.
              </p>

              <p>
                The best way to find team members is to attend one of the public
                D4SD events (announcements coming soon). The events will give
                you a chance to participate in fun hands-on activities, such as
                small group discussions, brainstorming, and prototyping, and
                will help you find people interested in similar problems.
              </p>

              <p>
                If you cannot attend the in-person events, you can take
                advantage of the D4SD Slack Channel to look for teammates and
                discuss solutions with other challenge participants. You are
                free to communicate directly with other participants and form
                teams on your own. There is no limit to team size, however we
                recommend team sizes of 4-6.
              </p>
            </Panel>
            <Panel
              header="Can I work on multiple teams?"
              key="5"
              className="panel-style"
            >
              <p>
                No. Participants can enter the challenge either as an individual
                or as a team. Participants can even switch teams during the
                challenge or combine two teams together. However, each
                participant can only be part of one team proposal.
              </p>
            </Panel>
            <Panel
              header="Who owns the solutions?"
              key="6"
              className="panel-style"
            >
              <p>
                Individuals or teams will retain all intellectual property
                rights on solutions submitted to the D4SD Challenge. As an
                initiative from the UC San Diego Design Lab, D4SD is a
                non-profit dedicated to demonstrating the value of
                human-centered design and incubating great ideas into companies
                or longer-term projects that foster economic activity in the
                City of San Diego and beyond.
              </p>
            </Panel>
            <Panel
              header="How can my team get help on our project?"
              key="7"
              className="panel-style"
            >
              <p>
                D4SD supports many ways for you and your team to get help. Your
                team can reach out through the Slack channel, for example, by
                posting a message to one of the problem thread channels. Later,
                during the prototyping phase of D4SD, we will open a feedback
                exchange where you can get input from the community. D4SD also
                has a resources page with various tips on how to get started.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FaqLayout;
