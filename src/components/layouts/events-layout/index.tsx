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
      <div className="events-summary">
        <div className="container">
          <h2>{eventsContent.summary.title}</h2>
          <p>{eventsContent.summary.info}</p>
          {eventsContent.summary.events.map(event => {
            return (
              <div>
                <p>
                  <b>• {event.name}</b>{" "}
                  <span className="event-dates">
                    {event.start_date.toUpperCase()}
                  </span>
                </p>
                <p>{event.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/*  */}
      <div className="speakers">
        <div className="container">
          {" "}
          <h2>{eventsContent.speaker.title}</h2>
          <p>{eventsContent.speaker.info}</p>
        </div>
        <div className="imageDiv">
          {eventsContent.speaker.images.map(imgSrc => {
            return <img src={imgSrc} className="speaker-images" />;
          })}
        </div>
      </div>
      <div className="events-summary">
        <div className="container">
          <h2>{eventsContent.design_jam.title}</h2>
          <p>{eventsContent.design_jam.info}</p>
          {eventsContent.design_jam.dates.map(event => {
            return (
              <p>
                • <a href={event.link}>{event.date.toUpperCase()}</a> {" : "}
                {event.description}
              </p>
            );
          })}
        </div>
      </div>
      <div className="speakers">
        <div className="container">
          <h2>{eventsContent.summit.title}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: eventsContent.summit.info }} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsLayout;
