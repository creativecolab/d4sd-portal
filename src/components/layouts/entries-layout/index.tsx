import React, { useRef, useState } from "react";
import { Row, Col, Button, Carousel } from "@d4sd/components";
import Header from "../../Header/index";
import { entriesContent } from "../../../assets/content";
import "./style.less";
const EntryCard = (props: any) => {
  const [entryInfo, setEntryInfo] = useState(props);
  console.log(typeof props.info);
  return (
    <Col
      xs={{ span: 24 }}
      md={{ span: 12 }}
      style={{ color: "#4497ff" }}
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
        </div>
      </div>
    </div>
  );
};

export default EntriesLayout;
