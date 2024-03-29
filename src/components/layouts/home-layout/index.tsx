import React, { useRef } from "react";
import { Row, Col, Button, Carousel } from "@d4sd/components";
import { useHistory, NavLink, Link } from "react-router-dom";
import "./style.less";
import "../../../styles/containers.less";
import { homeContent } from "../../../assets/content";
import Footer from "../../Footer";
import { contentHTML } from "../../../actions";

// const photoCarouselSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   // slidesToShow: `${window.innerWidth < '768' ? 1:3}`,
//   slidesToScroll: 0,
//   autoplay: true
// };

const logoCarouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  draggable: true,
  autoplay: true
};

function isApril(date: any) {
  if (date === 10) {
    return "10+";
  }
  return date;
}

const HomeLayout = (): JSX.Element => {
  const ref = useRef<HTMLHeadingElement>(null);
  const history = useHistory();
  const scrollToRef = (): void => {
    if (ref && ref.current) {
      const position = ref.current.offsetTop - 130;
      // eslint-disable-next-line
      window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth"
      });
    }
  };

  const SummitBanner = (): JSX.Element => (
    <div className="summit-banner">
      {/* <div className="information">
        <div className="summit-event"> */}
      {/* <div className="date">
            <p>
              {homeContent.summit_banner.date.toDateString().substring(4, 7)}
            </p>
            <h1>{homeContent.summit_banner.date.getDate()}</h1>
          </div> */}
      {/* <div className="title">
            <h1>{homeContent.summit_banner.title}</h1>
            <h5>{homeContent.summit_banner.location}</h5>
          </div> */}
      {/* </div>
      </div> */}
      <div className="action-buttons">
        <div className="button-container" onClick={(): void => scrollToRef()}>
          <Button type="primary" size="medium" className="button learn-more">
            LEARN MORE
          </Button>
        </div>
        <a
          href="http://eepurl.com/c2kFon"
          target="_blank"
          rel="noopener noreferrer"
          className="button-container"
        >
          <Button
            type="primary-outline"
            size="medium"
            className="button outline"
          >
            JOIN THE NEWSLETTER!
          </Button>
        </a>
      </div>
    </div>
  );

  return (
    <div className="Home">
      <div className="landing">
        <div className="container">
          <h3 className="d4sdsubtitle">
            {homeContent.subtitle1_1}
            <br className="subtitle-break" />
            {homeContent.subtitle1_2}
          </h3>
          <h1 className="d4sdmaintitle">
            {homeContent.title1_1}
            <br className="title-break" />
            {homeContent.title1_2}
          </h1>
          
          <p className="d4sd-content">
            <p dangerouslySetInnerHTML={contentHTML(homeContent.content1_1)} />
          </p>
          <br />
          <iframe className="d4sd-video" src="https://youtube.com/embed/JG1Y4IcE9fw"></iframe>
          <SummitBanner />
          
        </div>
      </div>
      <div className="container">
        <div className="paragraph">
          <h2 ref={ref}>{homeContent.title2}</h2>
          <div className="text">
            {/* eslint-disable-next-line */}
            <p dangerouslySetInnerHTML={contentHTML(homeContent.content2_1)} />
          </div>
        </div>
        <Row className="rowpics" type="flex" justify="center">
          {homeContent.roles.map((role, i) => (
            <Col
              // eslint-disable-next-line
              key={`content${i}`}
              md={{ span: 6 }}
              xs={{ span: 9 }}
            >
              <figure>
                <NavLink to={role.link}>
                  <img
                    className="picitems"
                    src={role.image}
                    style={{ width: "75%" }}
                    alt=""
                  />
                </NavLink>
                <h5 className="piccontents">{role.contents}</h5>
              </figure>
            </Col>
          ))}
        </Row>
      </div>

      <div className="section challenges">
        <Carousel autoplay className="challenges-carousel">
          {homeContent.challenges.map((challenge, i) => (
            // eslint-disable-next-line
            <div className="challenge-item" key={`challenge${i}`}>
              <div
                className="challenge-card"
                style={{
                  backgroundImage: `url(${challenge.src})`
                }}
              >
                <div className="container">
                  <div className="paragraph">
                    <h3>{challenge.header}</h3>
                    <h2>{challenge.title}</h2>
                    {/* eslint-disable-next-line */}
                    <p dangerouslySetInnerHTML={contentHTML(challenge.txt)} />
                    <NavLink to={challenge.url}>
                      <Button type="primary">LEARN MORE</Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="container">
        <div className="paragraph">
          <h2>{homeContent.title3}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={contentHTML(homeContent.content3)} />
          <a
            href="https://d4sd2017.ucsd.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>SEE WHAT HAPPENED IN 2017</Button>
          </a>
        </div>
      </div>
      <Row type="flex" justify="center">
        {homeContent.actionImg.map((img, i) => (
          <Col
            // eslint-disable-next-line
            key={`actionImg${i}`}
            md={6}
            xs={9}
          >
            <img src={img} style={{ width: "98%" }} alt="" />
          </Col>
        ))}
      </Row>

      <div className="container">
        <div className="paragraph">
          <h2>{homeContent.title4}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={contentHTML(homeContent.content4)} />
          <NavLink to="volunteer">
            <Button>VOLUNTEER</Button>
          </NavLink>
        </div>
      </div>

      <Carousel
        // eslint-disable-next-line
        {...logoCarouselSettings}
        slidesToShow={window.innerWidth < 768 ? 1 : 3}
        className="logo-carousel"
      >
        {homeContent.logos.map((logo, i) => (
          // eslint-disable-next-line
          <div key={`logo${i}`}>
            <img src={logo} style={{ width: "100%" }} alt="" />
          </div>
        ))}
      </Carousel>
      <Footer />
    </div>
  );
};

export default HomeLayout;
