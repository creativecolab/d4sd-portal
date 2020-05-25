import React, { useRef, useState } from "react";
import { Button, Carousel } from "@d4sd/components";
import {Row, Col} from "react-grid-system";
import Header from "../../Header/index";
import { entriesContent } from "../../../assets/content";
import "./style.less";
const EntryCard = (props: any) => {
  const [entryInfo, setEntryInfo] = useState(props);
  console.log(typeof props.info);
  return (
    <Col xs={12} md={6}
      className="entryCards"
    >
      <div className="entryDiv">
        <div className="imgDiv"></div>
        <h4>{props.info.projectName}</h4>
        <h5>{props.info.members}</h5>
        <p>{props.info.projectDescription}</p>
      </div>
    </Col>
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
        <div className="compelling_storytelling">
          <h2>Compelling Storytelling</h2>
          <Row justify="start">
            {entriesContent.compelling_storytelling.map(project => {
              return <EntryCard info={project} />;
            })}
          </Row>

          <div className="compelling_storytelling">
            <h2>High Potential For Impact</h2>
            <Row justify="start">
              {entriesContent.high_potential_for_impact.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>

          <div className="compelling_storytelling">
            <h2>Showing The Human-Centered Design Process</h2>
            <Row justify="start">
              {entriesContent.human_centered_design_process.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>

          <div className="compelling_storytelling">
            <h2>People's Choice</h2>
            <Row justify="start">
              {entriesContent.peoples_choice.map(project => {
                return <EntryCard info={project} />;
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntriesLayout;
