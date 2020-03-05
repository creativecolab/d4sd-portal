import React, { useRef } from 'react';
import {
  Row, Col, Button, Carousel
} from '@d4sd/components';
import { NavLink } from 'react-router-dom';
import Menubar from '../../menubar/index';
import './style.less';
import '../../../styles/containers.less';
import { homeContent } from '../../../assets/content';
import Footer from '../../Footer';
import { contentHTML } from '../../../actions';

// const photoCarouselSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   // slidesToShow: `${window.innerWidth < '768' ? 1:3}`,
//   slidesToScroll: 0,
//   autoplay: true
// };

const logoCarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  draggable: true,
  autoplay: true
};

const HomeLayout = (): JSX.Element => {
  const ref = useRef<HTMLHeadingElement>(null);
  const scrollToRef = (): void => {
    if (ref && ref.current) {
      const position = ref.current.offsetTop - 90;
      // eslint-disable-next-line
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  };

  const SummitBanner = (): JSX.Element => (
    <div className="summit-banner">
      <div className="information">
        <div className="summit-event">
          <div className="date">
            <p>{homeContent.summit_banner.date.toDateString().substring(4, 7)}</p>
            <h1>{homeContent.summit_banner.date.getDate()}</h1>
          </div>
          <div className="title">
            <h1>{homeContent.summit_banner.title}</h1>
            <h5>{homeContent.summit_banner.location}</h5>
          </div>
        </div>
        <div className="key-dates">
          {homeContent.summit_banner.key_dates.map((date, i) => (
            <div className={`date-${i + 1}`} key={`${date.key}_div`}>
              <p className="date">
                {date.start_date ? (
                  <>
                    {date.start_date.toDateString().substring(4, 7)}
                    {' '}
                    {date.start_date.getDate()}
                    {' '}
                    –
                    {' '}
                    {date.end_date.getDate()}
                  </>
                ) : (
                  <>
                    {date.date.toDateString().substring(4, 7)}
                    {' '}
                    {date.date.getDate()}
                  </>
                )}
              </p>
              <div style={{ marginRight: '10px' }} />
              <p>{date.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="action-buttons">
        <Button
          type="primary" size="medium" onClick={scrollToRef}
          className="button-container button learn-more"
        >
          LEARN MORE
        </Button>
        <a
          href="http://eepurl.com/c2kFon"
          target="_blank"
          rel="noopener noreferrer"
          className="button-container"
        >
          <Button
            type="primary-outline" size="medium" style={{ width: '100%' }}
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
      <Menubar />
      <div className="landing">
        <div className="container">
          <h3 className="d4sdsubtitle">{homeContent.subtitle1}</h3>
          <h1 className="d4sdmaintitle">{homeContent.title1}</h1>
          <p className="d4sd-content">{homeContent.content1}</p>
          <br />
          <br />
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
                    style={{ width: '75%' }}
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
                    <NavLink to="/challenges">
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
            <img src={img} style={{ width: '98%' }} alt="" />
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
            <img src={logo} style={{ width: '100%' }} alt="" />
          </div>
        ))}
      </Carousel>
      <Footer />
    </div>
  );
};

export default HomeLayout;
