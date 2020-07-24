import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Button } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer";
import { Link, useHistory } from "react-router-dom";
import { eventsContent } from "../../../assets/content";
import "./style.less";

const EventsLayout = (): JSX.Element => {
  const sectionRefs = [
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null)
  ];
  const sectionMap: { [key: string]: number } = {
    civic_speakers: 0,
    design_jams: 1,
    summit_2020: 2
  };

  useEffect(() => {
    setTimeout(() => {
      const section = window.location.search.substr(1);
      if (section in sectionMap) {
        scrollTo(section);
      }
    }, 100);
    // eslint-disable-next-line
  }, []);
  const ref = useRef<HTMLHeadingElement>(null);
  const history = useHistory();
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
                {/*es-lint disable next line */}
                <p>
                  <b>• {event.name}</b>

                  {"  "}
                  <span className="event-dates">
                    ( {event.start_date.toUpperCase()} )
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
      <div className="speakers" id="summit-2020">
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
