import React, { useRef, useState } from "react";
import { Button, Carousel } from "@d4sd/components";
import { Row, Col } from "react-grid-system";
import Header from "../../Header/index";
import { entriesContent } from "../../../assets/content";
import "./style.less";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
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
            <img
              src={props.info.featuredImage}
              className="featuredImage"
            />
          </a>
        </div>
    </Col>
    <Col xs={12} md={6} className="entryMeta">
      <div className="entryDiv">
        <h4>{props.info.projectName}</h4>
        <h5>{props.info.members}</h5>
        <p className="projectDescription">{props.info.projectDescription}</p>
      </div>
    </Col>
    </div>
  );
};

const EntriesLayout = (): JSX.Element => {
  return (
    <div>
      <Header
        title={entriesContent.title}
        content={entriesContent.subInfo}
        image={entriesContent.image}
      />
      <div className="container">
        <div className="project_section">
          <h2>Compelling Storytelling</h2>
          <Row justify="start">
            {entriesContent.compelling_storytelling.map(project => {
              return <EntryCard info={project} />;
            })}
          </Row>

          <div className="project_section">
            <h2>High Potential For Impact</h2>
            <Row justify="start">
              {entriesContent.high_potential_for_impact.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>

          <div className="project_section">
            <h2>Showing The Human-Centered Design Process</h2>
            <Row justify="start">
              {entriesContent.human_centered_design_process.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>

          <div className="project_section">
            <h2>People's Choice</h2>
            <Row justify="start">
              {entriesContent.peoples_choice.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>

          <div className="project_section">
            <h2>All Projects</h2>
            <Row justify="start">
              {entriesContent.all_projects.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>

          <div className="project_section">
            <h2>Posters</h2>
            <Row justify="start">
              {entriesContent.all_posters.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EntriesLayout;
