import React, { useRef } from 'react';
import {
  Row, Col, Button, Carousel
} from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less';
import '../../../styles/containers.less';
import { homeContent } from '../../../assets/content';

import landingImage from '../../../assets/img/home_landing.svg';


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

  return (
    <div>
      <Menubar />
      <div className="landing">
        <div className="container">
          <h3>{homeContent.subtitle1}</h3>
          <h1>{homeContent.title1}</h1>
          <p>{homeContent.content1}</p>
          <br />
          <br />
          <Row
            type="flex"
            justify="center"
          >
            <Col
              xs={24}
              md={9}
              lg={5}
            >
              <a
                href="http://eepurl.com/c2kFon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  type="primary"
                  size="default"
                >
                JOIN MAILING LIST
                </Button>
              </a>
            </Col>
            <Col
              xs={24}
              md={9}
              lg={5}
            >
              <Button
                type="primary-outline"
                size="default"
                onClick={scrollToRef}
              >
                LEARN MORE
              </Button>
            </Col>
          </Row>
        </div>
        <div className="landing-image">
          <img alt="landing_image" src={landingImage} />
        </div>
      </div>
      <div className="container">
        <div className="paragraph">
          <h2 ref={ref}>{homeContent.title2}</h2>
          {/* eslint-disable */}
          <p dangerouslySetInnerHTML={{ __html: homeContent.content2_1 }} />
          <p dangerouslySetInnerHTML={{ __html: homeContent.content2_2 }} />
          {/* eslint-enable */}
          <a href="/getinvolved">
            <Button
              type="primary"
              size="default"
            >
              GET INVOLVED
            </Button>
          </a>
        </div>
        <Row
          type="flex"
          justify="center"
        >
          {homeContent.roles.map((role, i) => (
            <Col
              // eslint-disable-next-line
              key={`content${i}`}
              md={{ span: 6 }}
              xs={{ span: 9 }}
            >
              <figure>
                <img src={role.image} style={{ width: '75%' }} alt="" />
                <h5>{role.contents}</h5>
              </figure>
            </Col>
          ))}
        </Row>
      </div>

      <div className="section challenges">
        <Carousel
          autoplay
          className="challenges-carousel"
        >
          {homeContent.challenges.map((challenge, i) => (
            // eslint-disable-next-line
            <div className="challenge-item" key={`challenge${i}`}>
              <div
                style={{
                  backgroundImage: `url(${challenge.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100%',
                  backgroundPosition: 'center bottom',
                  height: '80vh'
                }}
              >
                <div className="container">
                  <div className="paragraph">
                    <h3>{challenge.header}</h3>
                    <h2>{challenge.title}</h2>
                    {/* eslint-disable-next-line */}
                    <p dangerouslySetInnerHTML={{ __html: challenge.txt }} />
                    <a href="/challenges">
                      <Button type="primary">Learn More</Button>
                    </a>
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
          <p dangerouslySetInnerHTML={{ __html: homeContent.content3 }} />
          <a
            href="https://d4sd2017.ucsd.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>SEE WHAT HAPPENED IN 2017</Button>
          </a>
        </div>
      </div>
      <Row
        type="flex"
        justify="center"
      >
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
          <p dangerouslySetInnerHTML={{ __html: homeContent.content4 }} />
          <a href="/getinvolved">
            <Button>GET INVOLVED</Button>
          </a>
        </div>
      </div>

      { /* eslint-disable */ }
      <Carousel
        {...logoCarouselSettings}
        slidesToShow={window.innerWidth < 768 ? 1 : 3}
        className="logo-carousel"
      >
        { /* eslint-enable */ }
        {homeContent.logos.map((logo, i) => (
          // eslint-disable-next-line
          <div key={`logo${i}`}>
            <img src={logo} style={{ width: '100%' }} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeLayout;
