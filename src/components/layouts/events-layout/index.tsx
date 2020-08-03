import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Button } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer";
import { Link, useHistory } from "react-router-dom";
import { eventsContent } from "../../../assets/content";
import d4sdMural from "../../../assets/img/designjam-mural.png";
import "./style.less";
import { any } from "prop-types";

const EventsLayout = (): JSX.Element => {
  const sectionRefs = [
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null)
  ];

  const sectionMap: { [key: string]: number } = {
    speakers: 0,
    designJam: 1,
    summit: 2
  };

  const scrollTo = (sect: string): void => {
    const section = sectionRefs[sectionMap[sect]];
    if (section && section.current) {
      const position = section.current.offsetTop - 110;
      // eslint-disable-next-line
      window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const section = window.location.search.substr(1);
      if (section in sectionMap) {
        scrollTo(section);
      }
    }, 100);
  });

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
          <Row justify="center" type="flex">
            {eventsContent.summary.events.map(event => {
              return (
                <Col
                  xs={6}
                  className="events"
                  onClick={(): void => scrollTo(event.ref)}
                >
                  {/*es-lint disable next line */}
                  <img src={event.image} />
                  <h4 style={{ textAlign: "center" }}>{event.name}</h4>
                  <h5 style={{ textAlign: "center" }}>
                    {event.start_date.toUpperCase()}
                  </h5>
                  {/* <p>{event.description}</p> */}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      {/*  */}
      <div className="speakers" ref={sectionRefs[0]}>
        <div className="container">
          {" "}
          <h2>{eventsContent.speaker.title}</h2>
          <p>{eventsContent.speaker.info}</p>
          <div className="guests">
            {eventsContent.speaker.series.map(guest => {
              var len = guest.content.length - 1;
              return (
                <div className="guest-content">
                  <p>
                    • {guest.date.toUpperCase()} :{" "}
                    <span>
                      {guest.content.map((guest, index) => {
                        var delimiter = "";
                        if (index === len) {
                          delimiter = ".";
                        } else {
                          delimiter = ", ";
                        }
                        return (
                          <>
                            <a href={guest.linkedin}>{guest.name}</a> {"from"}{" "}
                            {guest.from}
                            {delimiter}
                          </>
                        );
                      })}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="imageDiv">
          {eventsContent.speaker.images.map(imgSrc => {
            return <img src={imgSrc} className="speaker-images" />;
          })}
        </div>
      </div>
      <div className="events-summary" ref={sectionRefs[1]}>
        <div className="container">
          <h2>{eventsContent.design_jam.title}</h2>
          <p>{eventsContent.design_jam.info}</p>
          {eventsContent.design_jam.dates.map(event => {
            return (
              <p>
                •{" "}
                <a href={event.link} target="_blank">
                  {event.date.toUpperCase()}
                </a>{" "}
                {" : "}
                {event.description}
              </p>
            );
          })}
        </div>
        <img src={d4sdMural} className="mural-img" />
      </div>
      <div className="speakers" ref={sectionRefs[2]}>
        <div className="container">
          <h2>{eventsContent.summit.title}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: eventsContent.summit.info }} />
        </div>
        <div className="imageDiv">
          {eventsContent.summit.images.map(imgSrc => {
            return <img src={imgSrc} key={imgSrc} className="speaker-images" />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventsLayout;
