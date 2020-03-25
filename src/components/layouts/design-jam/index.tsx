import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "../../../styles/containers.less";
import "./style.less";
import { joinDesignJam } from "../../../assets/content";

const SubmitLayout = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  // eslint-disable-next-line
  const scrollToRef = (): void => {
    if (ref && ref.current) {
      const position = ref.current.offsetTop - 90;
      // eslint-disable-next-line
      console.log(ref.current, position);
      window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth"
      });
    }
  };

  // eslint-disable-next-line
  const [loggedIn] = useState(true);
  // eslint-disable-next-line
  const loggedInHeaderText =
    "D4SD is a human-centered design challenge focused on bringing together our community to discover and articulate civic issues, to generate ideas and create prototypes, and to build alliances with key civic, business and design leaders. Everyone can participate.";
  return (
    <div className="SubmitPage">
      <Header
        title={joinDesignJam.title1}
        content={joinDesignJam.content1}
        image={joinDesignJam.image}
      />
      <div className="section" id="section-1">
        <div className="container">
          <h2 className="title">{joinDesignJam.title2}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: joinDesignJam.content2 }} />
        </div>
      </div>
      <div className="section" id="section-2" ref={ref}>
        <div className="container">
          {joinDesignJam.importantDates.map(details => (
            <div
              className={`date-box ${details.className}`}
              key={`${details.key}_box`}
            >
              <div className="date-info">
                <>
                  <div className="date-month" key={`${details.key}_month`}>
                    {details.date
                      .toDateString()
                      .substring(4, 7)
                      .toUpperCase()}
                  </div>
                  <div className="date-num" key={`${details.key}_num`}>
                    {details.date.getDate()}
                  </div>
                </>
              </div>
              <div className="date-desc">
                <h2 className={`desc-title ${details.className}`}>
                  {details.title}
                </h2>
                {/* eslint-disable-next-line */}
                <p className="desc">{details.body}</p>
              </div>
            </div>
          ))}
          <a
            href="/attend"
            rel=""
          >
            <Button>REGISTER NOW</Button>
          </a>
          {/* eslint-disable-next-line */}
          <p
            className="bottomContent"
            dangerouslySetInnerHTML={{ __html: joinDesignJam.content3 }}
          />
        </div>
      </div>
      <div className="section" id="section-3">
        <div className="container" />
      </div>
      <Footer />
    </div>
  );
};

export default SubmitLayout;
