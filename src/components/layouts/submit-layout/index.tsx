import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "../../../styles/containers.less";
import "./style.less";
import { submitContent } from "../../../assets/content";

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
        title={submitContent.title1}
        content={submitContent.content1}
        image={submitContent.image}
      />
      <div className="section" id="section-1">
        <div className="container">
          <h2 className="title">{submitContent.title2}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: submitContent.content2 }} />
        </div>
      </div>
      <div className="section" id="section-2" ref={ref}>
        <div className="container">
          {submitContent.importantDates.map(details => (
            <div
              className={`date-box ${details.className}`}
              key={`${details.key}_box`}
            >
              <div className="date-info">
                {details.override_date ? (
                  <div className="date-month temp" key={`${details.key}_month`}>
                    {details.override_date}
                  </div>
                ) : (
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
                )}
              </div>
              <div className="date-desc">
                <h2 className={`desc-title ${details.className}`}>
                  {details.override_date ? (
                    <s>{details.title}</s>
                  ) : (
                    details.title
                  )}
                </h2>
                {/* eslint-disable-next-line */}
                <p className="desc">
                  {details.body}
                  {details.body_2 ? (
                    <>
                      {/* eslint-disable-next-line */}
                      <a
                        href=""
                        onClick={(
                          evt: React.MouseEvent<HTMLAnchorElement>
                        ): void => {
                          evt.preventDefault();
                          history.push("/covid19");
                        }}
                      >
                        here
                      </a>
                      {details.body_2}
                    </>
                  ) : null}
                </p>
                {details.override_date ? (
                  <a
                    href={details.action_button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`action-button ${details.action_button.className}`}
                      disabled={details.action_button.disabled}
                    >
                      {details.action_button.label}
                    </Button>
                  </a>
                ) : (
                  <Button
                    className={`action-button ${details.action_button.className}`}
                    onClick={(): void =>
                      history.push(details.action_button.url)
                    }
                    disabled={details.action_button.disabled}
                  >
                    {details.action_button.label}
                  </Button>
                )}
              </div>
            </div>
          ))}
          <a
            href="/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>REGISTER NOW</Button>
          </a>
          {/* eslint-disable-next-line */}
          <p
            className="bottomContent"
            dangerouslySetInnerHTML={{ __html: submitContent.content3 }}
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
