import React from "react";
import { Row, Col } from "react-grid-system";

import Header from "../../Header/index";
import { entriesContent } from "../../../assets/content";
import Footer from "../../Footer";

import "./style.less";

const EntryCard = (props: any) => {
  console.log(props.info.featuredImage);
  return (
    <div>
      <Col xs={12} md={4} className="entryCards">
        <div className="entryDiv">
          <a
            href={props.info.projectLink}
            target="_blank"
            title={props.info.projectName}
          >
            <img src={props.info.featuredImage} className="featuredImage" />
          </a>
        </div>
      </Col>
      <Col xs={12} md={6} className="entryMeta">
        <div className="entryDiv">
          <a href={props.info.projectLink} target="_blank">
            <h4>{props.info.projectName}</h4>
          </a>
          <h5>{props.info.members}</h5>
          <p className="projectDescription">{props.info.projectDescription}</p>
        </div>
      </Col>
    </div>
  );
};

const EntriesLayout = (): JSX.Element => (
  <div>
    <Header
      title={entriesContent.title}
      content={entriesContent.subInfo}
      image={entriesContent.image}
    />
    <div className="container">
      <div className="project_section">
        <h2>D4SD Summit Award for Compelling Storytelling</h2>
        <p className="award-description">
          The D4SD team rewarded these two projects for crafting compelling
          stories about how the proposed solutions can impact everyday people,
          especially transportation workers and small businesses affected by
          COVID-19.
        </p>
        <Row align="center">
          {entriesContent.compelling_storytelling.map(project => (
            <EntryCard info={project} />
          ))}
        </Row>

        <div className="project_section">
          <h2>D4SD Summit Award for Potential Impact</h2>
          <p className="award-description">
            The D4SD awards team felt that these two projects, in particular,
            are well positioned to make an impact today on the emotional health
            and safety of our residents.
          </p>
          <Row align="center">
            {entriesContent.high_potential_for_impact.map(project => (
              <EntryCard info={project} />
            ))}
          </Row>
        </div>

        <div className="project_section">
          <h2>D4SD Summit Award for Exemplifying Human-Centered Design</h2>
          <p className="award-description">
            The D4SD awards team selected these two projects as wonderful
            examples of human-centered design where teams identified core
            problems by getting input from stakeholders.
          </p>
          <Row align="center">
            {entriesContent.human_centered_design_process.map(project => (
              <EntryCard info={project} />
            ))}
          </Row>
        </div>

        <div className="project_section">
          <h2>D4SD Summit People's Choice Award</h2>
          <p className="award-description">
            A survey at the D4SD Summit asked attendees to weigh in on the best
            proposals. The people voted and these three team proposals were
            among the best.
          </p>
          <Row align="center">
            {entriesContent.peoples_choice.map(project => (
              <EntryCard info={project} />
            ))}
          </Row>
        </div>

        <div className="project_section">
          <h2>All Proposals from the D4SD 2020 Summit</h2>
          <p className="award-description">
            Congratulations to all participants who submitted proposals for this
            year’s Design for San Diego challenge! These proposals were selected
            to verbally present their ideas at the 2020 Summit.
          </p>
          <Row align="center">
            {entriesContent.all_projects.map(project => (
              <EntryCard info={project} />
            ))}
          </Row>
        </div>

        <div className="project_section">
          <h2>Posters</h2>
          <p className="award-description">
            Congratulations to all participants who submitted proposals for this
            year’s Design for San Diego challenge! These proposals were selected
            to verbally present their ideas at the 2020 Summit.
          </p>
          <Row align="center">
            {entriesContent.all_posters.map(project => (
              <EntryCard info={project} />
            ))}
          </Row>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default EntriesLayout;
