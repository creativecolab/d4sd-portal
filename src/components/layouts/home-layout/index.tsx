import React, { useRef } from 'react';
import {
  Row, Col, Button, Carousel
} from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less';
import '../../../styles/containers.less';
import { homeContent, summitContent } from '../../../assets/content';
import Footer from '../../Footer';
import { contentHTML } from '../../../actions';

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
    <div className="Home">
      <Menubar />
      <div className="landing">
        <div className="container">
          <h3 className="d4sdsubtitle">{homeContent.subtitle1}</h3>
          <h1 className="d4sdmaintitle">{homeContent.title1}</h1>
          <p className="d4sd-content">{homeContent.content1}</p>
          <br />
          <br />
          <a
            href="http://eepurl.com/c2kFon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" size="medium">
              JOIN MAILING LIST
            </Button>
          </a>
          <Button type="primary-outline" size="medium" onClick={scrollToRef}>
            LEARN MORE
          </Button>
        </div>
        <div className="landing-image">
          <img alt="landing_image" src={landingImage} />
        </div>
      </div>

      <div className="summit">
        <div className="pics">
          <img className="pic" src={summitContent.image1} />
          <img className="pic" src={summitContent.image2} />
          <img className="pic" src={summitContent.image3} />
          <img className="pic" src={summitContent.image4} />
        </div>
        <div className="content">
          <img className="logo" src={summitContent.logo} />
          <div className="line" />
          <h1 className="subtitle">{summitContent.subtitle1}</h1>
          <h1 className="subtitle">{summitContent.subtitle2}</h1>
          <br />
          <h3>{summitContent.title1}</h3>
          <h3>{summitContent.title2}</h3>
          <h3>{summitContent.title3}</h3>
          <div className="buttons">
            <Button className="register" type="primary" size="default">
                REGISTER FOR THE SUMMIT
            </Button>
            <Button className="learn" size="default">
                LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="paragraph">
          <h2 ref={ref}>{homeContent.title2}</h2>
          {/* eslint-disable */}
          <p dangerouslySetInnerHTML={contentHTML(homeContent.content2_1)} />
          <p dangerouslySetInnerHTML={contentHTML(homeContent.content2_2)} />
          {/* eslint-enable */}
          <a href="/getinvolved">
            <Button type="primary" size="default">
              GET INVOLVED
            </Button>
          </a>
        </div>
        <Row type="flex" justify="center">
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
                    <a href="/challenges">
                      <Button type="primary">LEARN MORE</Button>
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
          <a href="/getinvolved">
            <Button>GET INVOLVED</Button>
          </a>
        </div>
      </div>

      {/* eslint-disable */}
      <Carousel
        {...logoCarouselSettings}
        slidesToShow={window.innerWidth < 768 ? 1 : 3}
        className="logo-carousel"
      >
        {/* eslint-enable */}
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
