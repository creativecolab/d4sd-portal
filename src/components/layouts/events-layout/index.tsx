import React, { useRef, useState } from "react";
import { Row, Col, Button } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { eventsContent } from "../../../assets/content";
import "./style.less";

const EventsLayout = (): JSX.Element => {
  return (
    <div className="events-content">
      <Header
        title={eventsContent.title}
        content={eventsContent.subInfo}
        image={eventsContent.image}
      />
      <Row type="flex" justify="center" className="events-summary">
        <Col xs={20} md={16}>
          <h2>{eventsContent.summary.title}</h2>
          <p>{eventsContent.summary.info}</p>
          {eventsContent.summary.events.map((event, index) => {
            return (
              <div>
                <p>
                  <b>
                    {index + 1}. {event.name}
                  </b>{" "}
                  <span className="event-dates">
                    {event.start_date.toUpperCase()}
                  </span>
                </p>
                <p>{event.description}</p>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row className="speakers" type="flex" justify="center">
        <Col xs={20} md={16}>
          <h2>{eventsContent.speaker.title}</h2>
          <p>{eventsContent.speaker.info}</p>
        </Col>
        <Col xs={24}>
          <div className="scrollWrapper">
            <div className="scrollContainer">
              <div className="imageDiv">
                {eventsContent.speaker.images.map(imgSrc => {
                  return <img src={imgSrc} className="speaker-images" />;
                })}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="center" className="events-summary">
        <Col xs={20} md={16}>
          <h2>{eventsContent.design_jam.title}</h2>
          <p>{eventsContent.design_jam.info}</p>
          {eventsContent.design_jam.dates.map((event, index) => {
            return (
              <p>
                • <a href={event.link}>{event.date.toUpperCase()}</a> {" : "}
                {event.description}
              </p>
            );
          })}
        </Col>
      </Row>
      <Row type="flex" justify="center" className="speakers">
        <Col xs={20} md={16}>
          <h2>{eventsContent.summit.title}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: eventsContent.summit.info }} />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default EventsLayout;
