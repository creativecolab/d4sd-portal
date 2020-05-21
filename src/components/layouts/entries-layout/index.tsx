import React, { useRef } from "react";
import { Row, Col, Button, Carousel } from "@d4sd/components";
import Header from "../../Header/index";
import {entriesContent} from "../../../assets/content";

const EntriesLayout = (): JSX.Element => {
  return (
    <div>
      <Header
        title={entriesContent.title}
        content={entriesContent.subInfo}
        image={entriesContent.image}
      />
      <Row justify="center" align="middle">
        <h2>Finalists</h2>
        <Col>
        </Col>
      </Row>
    </div>
  );
};

export default EntriesLayout;
