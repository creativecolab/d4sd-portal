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
      xs={{ span: 20, offset: 2 }}
      md={{ span: 9, offset: 2 }}
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
      <div className="compelling_storytelling">
        <h2>Compelling Storytelling</h2>
        <Row justify="end">
          {entriesContent.compelling_storytelling.map(project => {
            return <EntryCard info={project} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default EntriesLayout;
