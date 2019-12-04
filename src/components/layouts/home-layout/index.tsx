import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel } from "@d4sd/components";
import Menubar from "../../menubar/index";
import "./style.less";

import InvolveInnovateSVG from "../../../assets/img/involve_innovate.svg";
import InvolvePartnerSVG from "../../../assets/img/involve_partner.svg";
import InvolveVolunteerSVG from "../../../assets/img/involve_volunteer.svg";
import InvolveSponsorSVG from "../../../assets/img/involve_sponsor.svg";

// Community logos
import LogoDLab from "../../../assets/img/home_logo_designlab.svg";
import LogoYankelovich from "../../../assets/img/home_logo_yankelovich.png";
import LogoSdcc from "../../../assets/img/home_logo_sdcc.png";
import LogoHth from "../../../assets/img/home_logo_hth.png";
import LogoPointLoma from "../../../assets/img/home_logo_pointloma.png";
import LogoId8 from "../../../assets/img/home_logo_id8.png";
import LogoNewSchool from "../../../assets/img/home_logo_newschool.png";
import LogoLeague from "../../../assets/img/home_logo_league.png";
import LogoAltSchool from "../../../assets/img/home_logo_AltSchool.png";
import LogoLjcds from "../../../assets/img/home_logo_LJCDS.png";
import LogoSdja from "../../../assets/img/home_logo_sdja.png";
import LogoSdsu from "../../../assets/img/home_logo_sdsu.png";
// import LogoIdealab from "../../../assets/img/home_logo_idealab.jpg";
import LogoUsd from "../../../assets/img/home_logo_usd.png";

const photoCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 0,
  autoplay: true
};

const logoCarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  draggable: true,
  autoplay: true
};
const HomeLayout = (props: any) => {
  return (
    <div>
      <Menubar />

      <div className="HomeLayout">
        <div className="landing-div">
          <Row gutter={[16, 16]} type="flex" justify="center">
            <Col md={{ span: 13 }} xs={{ span: 20 }}>
              <h3>DESIGN FOR SAN DIEGO'S 2020 CIVIC DESIGN CHALLENGE</h3>
              <h1>How can we make San Diego a more sustainable city?</h1>
            </Col>
            <Col md={{ span: 14 }} xs={{ span: 20 }}>
              <p>
                San Diego is an amazing place to live, work, and visit. But like
                many cities, San Diego faces a number of difficult challenges
                around mobility, climate, housing, and public health. Design for
                San Diego (D4SD) is an initiative to address complex challenges
                through design thinking and crowdsourcing.
              </p>
            </Col>
          </Row>
          <Row type="flex" justify="center" className="layout-btns">
            <Col md={{ span: 5 }} xs={{ span: 24 }}>
              <Button type="primary" size="small">
                JOIN MAILING LIST
              </Button>
            </Col>
            <Col md={{ span: 5 }} xs={{ span: 24 }}>
              <Button type="primary-outline" size="small">
                LEARN MORE
              </Button>
            </Col>
          </Row>
        </div>

        <Row type="flex" justify="center" className="mission-statement">
          <Col md={{ span: 14 }} xs={20}>
            <h2>Contribute to our mission</h2>
            <p>
              D4SD seeks to connect young, passionate designers to a network of
              industry professionals and structure a process for collectively
              addressing civic challenges related to the sustainability of our
              region. We are exploring new models for collective innovation
              where the community works together to discover problems, explore
              solutions, and build prototypes to test ideas.
            </p>
            <p>
              D4SD 2020 will host a series of design events including speakers,
              studios, and design-athons, starting in January. This will
              culminate into a summit in April where innovators can pitch their
              proposed solutions, and build alliances to make change happen.
            </p>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Button type="primary" size="medium">
              LEARN MORE
            </Button>
          </Col>
        </Row>

        <Row className="involve-fig" type="flex" justify="center">
          <Col md={{ span: 4 }} xs={{ span: 9 }}>
            <figure>
              <img src={InvolveInnovateSVG}></img>
              <figcaption>INNOVATE</figcaption>
            </figure>
          </Col>
          <Col md={{ span: 4 }} xs={{ span: 9 }}>
            <figure>
              <img src={InvolvePartnerSVG}></img>
              <figcaption>PARTNER</figcaption>
            </figure>
          </Col>
          <Col md={{ span: 4 }} xs={{ span: 9 }}>
            <figure>
              <img src={InvolveVolunteerSVG}></img>
              <figcaption>VOLUNTEER</figcaption>
            </figure>
          </Col>
          <Col md={{ span: 4 }} xs={{ span: 9 }}>
            <figure>
              <img src={InvolveSponsorSVG}></img>
              <figcaption>SPONSOR</figcaption>
            </figure>
          </Col>
        </Row>

        <div className="challenges">
          <Carousel autoplay className="challenges-carousel">
            {/* Mobility */}
            <div className="challenge-item">
              <div className="mobility-content">
                <h3 className="challenge-header">
                  LEARN ABOUT THE CHALLENGES: IMPROVING MOBILITY
                </h3>
                <h2>How might we help people move freely through our city?</h2>
                <p>
                  As people are looking for alternate ways to move around, while
                  also wanting to reduce their emissions, the topic of inclusive
                  and environmentally conscious transportation continues to be a
                  pressing issue in our urban environment. Mobility can be
                  examined from a number of lenses such as motor vehicle
                  systems, transit, parking, intermodal connections, electric
                  vehicles, accident reduction, walkability and bike-ability,
                  and land-use patterns.
                  <b> Help shape this problem by joining our discussion!</b>
                </p>
                <Button type="primary">Learn More</Button>
              </div>
            </div>

            {/* Climate */}
            <div className="challenge-item">
              <div className="climate-content">
                <h3 className="challenge-header">
                  LEARN ABOUT THE CHALLENGES: ADDRESSING CLIMATE EFFECTS
                </h3>
                <h2>
                  How can we help San Diego prepare for and mitigate climate
                  change?
                </h2>
                <p>
                  Burning of fossil fuels has resulted in the gradual increase
                  of global temperatures. Scientists have high confidence that
                  global temperatures will continue to rise for decades to come.
                  Climate change impacts areas such as transportation, housing,
                  health, natural resources, food waste, agriculture, air
                  pollution, and education.
                  <b> Help shape this problem by joining our discussion!</b>
                </p>
                <Button type="primary">Learn More</Button>
              </div>
            </div>

            {/* Housing */}
            <div className="challenge-item">
              <div className="housing-content">
                <h3 className="challenge-header">
                  LEARN ABOUT THE CHALLENGES: CREATING ACCESSIBLE HOUSING
                </h3>
                <h2>
                  How can we reimagine housing to meet the needs of all San
                  Diegans?
                </h2>
                <p>
                  Shelter is a fundamental human need; however people have
                  limited choices for safe, affordable, and long-term housing in
                  San Diego. The issue of housing is more than the physical
                  structures. It also includes homelessness, land development,
                  smart home technology, and mixed-use housing, all of which
                  needs to be addressed with San Diego’s growing population.
                  <b> Help shape this problem by joining our discussion!</b>
                </p>
                <Button type="primary">Learn More</Button>
              </div>
            </div>

            {/* Health */}
            <div className="challenge-item">
              <div className="health-content">
                <h3 className="challenge-header">
                  LEARN ABOUT THE CHALLENGES: LIVING HEALTHY LIVES
                </h3>
                <h2>
                  How can we help all San Diegans live healthy and active lives?
                </h2>
                <p>
                  Many San Diego residents have limited access to preventative
                  and restorative health services. Health is determined by
                  social and physical environments and is directly connected to
                  how people live, learn, work, and play. Topics such as quality
                  of life, population health, and social well being, are all
                  different aspects of how we as a city, need to improve our
                  well being.
                  <b> Help shape this problem by joining our discussion!</b>
                </p>
                <Button type="primary">Learn More</Button>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="d4sd-in-action">
          <h2>D4SD In Action</h2>
          <p>
            In 2017, hundreds of people helped to generate ideas through the
            first D4SD challenge: How to create a San Diego where we all can
            move freely. Over a two month period, 23 teams used human-centered
            design principles to prototype solutions to address the city’s
            mobility challenges. Visit our 2017 website to learn more about what
            we did in 2017 and to see some of the prototypes.
          </p>
          <Button>SEE WHAT HAPPENED IN 2017</Button>
          {/* Carousel of multiple images if we have 4 more images(?) */}
          <Carousel {...photoCarouselSettings} className="photo-carousel">
            <div>
              <img src={require("../../../assets/img/home_action2.jpg")} />
            </div>
            <div>
              <img src={require("../../../assets/img/home_action3.jpg")} />
            </div>
            <div>
              <img src={require("../../../assets/img/home_action4.jpg")} />
            </div>
            <div>
              <img src={require("../../../assets/img/home_action5.jpg")} />
            </div>
          </Carousel>
        </div>

        <div className="meet-community">
          <h2>Meet Our Community</h2>
          <p>
            In 2017, hundreds of people helped to generate ideas through the
            first D4SD challenge: How to create a San Diego where we all can
            move freely. Over a two month period, 23 teams used human-centered
            design principles to prototype solutions to address the city’s
            mobility challenges. Visit our 2017 website to learn more about what
            we did in 2017 and to see some of the prototypes.
          </p>
          <Button>GET INVOLVED</Button>
          <Carousel {...logoCarouselSettings} className="logo-carousel">
            <div>
              <img src={LogoDLab} />
            </div>
            <div>
              <img src={LogoYankelovich} />
            </div>
            <div>
              <img src={LogoSdcc} />
            </div>
            <div>
              <img src={LogoHth} />
            </div>
            <div>
              <img src={LogoPointLoma} />
            </div>
            <div>
              <img src={LogoId8} />
            </div>

            <div>
              <img src={LogoNewSchool} />
            </div>
            <div>
              <img src={LogoLeague} />
            </div>
            <div>
              <img src={LogoAltSchool} />
            </div>
            <div>
              <img src={LogoLjcds} />
            </div>
            <div>
              <img src={LogoSdja} />
            </div>
            <div>
              <img src={LogoSdsu} />
            </div>
            <div>
              <img src={LogoUsd} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
