import React, { useState, useRef } from "react";
import { Row, Col, Steps, Button, Carousel, Card } from "@d4sd/components";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import "../../../styles/containers.less";
import "./style.less";
import { challengeContent } from "../../../assets/content.js";
import ChallengeMobility from "../../../assets/img/challenge_mobility.svg";
import ChallengeClimate from "../../../assets/img/challenge_climate.svg";
import ChallengeHousing from "../../../assets/img/challenge_housing.svg";
import ChallengeHealth from "../../../assets/img/challenge_health.svg";

const ChallengeLayout = (props: any) => {
  const { Meta } = Card;

  const [lastMile, setLastMile] = useState(false);
  const [safety, setSafety] = useState(false);
  const [equitable, setEquitable] = useState(false);
  const [autonomous, setAutonomous] = useState(false);

  const [education, setEducation] = useState(false);
  const [waste, setWaste] = useState(false);
  const [grid, setGrid] = useState(false);
  const [climateInfra, setClimateInfra] = useState(false);

  const [mixuse, setMixuse] = useState(false);
  const [resilient, setResilient] = useState(false);
  const [homelessness, setHomelessness] = useState(false);
  const [iot, setIot] = useState(false);

  const [senior, setSenior] = useState(false);
  const [wellBeing, setWellBeing] = useState(false);
  const [dataAgency, setDataAgency] = useState(false);
  const [foodInsecurity, setFoodInsecurity] = useState(false);

  const mobility = useRef<HTMLHeadingElement>(null);
  const health = useRef<HTMLHeadingElement>(null);
  const housing = useRef<HTMLHeadingElement>(null);
  const environment = useRef<HTMLHeadingElement>(null);
  const scrollToMobility = () => {
    console.log("click")
    if (mobility && mobility.current) {
      console.log("click2")
      const position = mobility.current.offsetTop - 90;
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  }
  const scrollToHealth = () => {
    if (health && health.current) {
      const position = health.current.offsetTop - 90;
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  }
  const scrollToHousing = () => {
    if (housing && housing.current) {
      const position = housing.current.offsetTop - 90;
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  }
  const scrollToEnvironment = () => {
    if (environment && environment.current) {
      const position = environment.current.offsetTop - 90;
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div>
      <Header title={challengeContent.title} content={challengeContent.content} image={challengeContent.image}/>
      <div className="ChallengeLayout container">

        <div className="section">
          <Row justify="center" type="flex">
          <Col xs={10} sm={10} md={6}>
            <figure onClick={scrollToMobility}>
              <img src={challengeContent.nav[0].img} style={{"width":"75%"}}/>
              <h5 className="challenge-icon-caption">{challengeContent.nav[0].title}</h5>
            </figure>
          </Col>
          <Col xs={10} sm={10} md={6}>
            <figure onClick={scrollToHealth}>
              <img src={challengeContent.nav[1].img} style={{"width":"75%"}}/>
              <h5 className="challenge-icon-caption">{challengeContent.nav[1].title}</h5>
            </figure>
          </Col>
          <Col xs={10} sm={10} md={6}>
            <figure onClick={scrollToEnvironment}>
              <img src={challengeContent.nav[2].img} style={{"width":"75%"}}/>
              <h5 className="challenge-icon-caption">{challengeContent.nav[2].title}</h5>
            </figure>
          </Col>
          <Col xs={10} sm={10} md={6}>
            <figure onClick={scrollToHousing}>
              <img src={challengeContent.nav[3].img} style={{"width":"75%"}}/>
              <h5 className="challenge-icon-caption">{challengeContent.nav[3].title}</h5>
            </figure>
          </Col>
          </Row>

        </div>

        <div className="section">
          <h2 className="text">{challengeContent.title2}</h2>
          <p dangerouslySetInnerHTML={{__html:challengeContent.content2}} />
        </div>

        <div className="section">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h4 className="text" ref={mobility}>
                <span>MOBILITY: </span>How might we help people move freely in San
                Diego?
              </h4>
            </Col>
          </Row>
          <Row type="flex" justify="center" >
            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setLastMile(true)}
              onMouseLeave={() => setLastMile(false)}
            >
              <Card hoverable className="lastmile-card">
                <div className="card-bg">
                  {lastMile && (
                    <p className="card-text">
                      How might we improve the last-mile experience where
                      traffic is congested, parking is scarce, and public
                      transportation is limited?
                    </p>
                  )}
                  {!lastMile && <h2 className="card-text">Last Mile</h2>}
                </div>
              </Card>
            </Col>

            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setSafety(true)}
              onMouseLeave={() => setSafety(false)}
            >
              <Card hoverable className="safety-card">
                <div className="card-bg">
                  {safety && (
                    <p className="card-text">
                      Given the city’s aim to reduce roadway fatalities to zero,
                      how might we protect pedestrians, reduce distractions for
                      drivers, and improve emergency response?
                    </p>
                  )}
                  {!safety && <h2 className="card-text">Safe Roadways</h2>}
                </div>
              </Card>
            </Col>

            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setEquitable(true)}
              onMouseLeave={() => setEquitable(false)}
            >
              <Card hoverable className="equitable-card">
                <div className="card-bg">
                  {equitable && (
                    <p className="card-text">
                      How might we provide mobility resources that are
                      accessible to the many diverse needs of people in San
                      Diego?
                    </p>
                  )}
                  {!equitable && <h2 className="card-text">Safe Roadways</h2>}
                </div>
              </Card>
            </Col>


            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setAutonomous(true)}
              onMouseLeave={() => setAutonomous(false)}
            >
              <Card hoverable className="autonomous-card">
                <div className="card-bg">
                  {autonomous && (
                    <p className="card-text">
                      With the potential of self-driving cars on the horizon,
                      how might we prepare our city for major changes to
                      transportation infrastructure?
                    </p>
                  )}
                  {!autonomous && (
                    <h2 className="card-text">Autonomous Vehicles</h2>
                  )}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        {/* Health */}
        <div className="challenge">

              <h4 className="text" ref={health}>
                <span>HEALTH: </span>How might we help all San Diegans live healthy
                and active lives?
              </h4>
          <Row type="flex" justify="center">

            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setSenior(true)}
              onMouseLeave={() => setSenior(false)}
            >
              <Card hoverable className="senior-card">
                <div className="card-bg">
                  {senior && (
                    <p className="card-text">
                      How might we create new opportunities for seniors to stay
                      active, feel appreciated, and remain socially integrated
                      within the community?
                    </p>
                  )}
                  {!senior && <h2 className="card-text">Senior Health</h2>}
                </div>
              </Card>
            </Col>

            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setWellBeing(true)}
              onMouseLeave={() => setWellBeing(false)}
            >
              <Card hoverable className="wellbeing-card">
                <div className="card-bg">
                  {wellBeing && (
                    <p className="card-text">
                      How might we offer community support to those experiencing
                      social isolation, depression or who are seeking support
                      from others?
                    </p>
                  )}
                  {!wellBeing && (
                    <h2 className="card-text">Community Well-Being</h2>
                  )}
                </div>
              </Card>
            </Col>

            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setDataAgency(true)}
              onMouseLeave={() => setDataAgency(false)}
            >
              <Card hoverable className="dataAgency-card">
                <div className="card-bg">
                  {dataAgency && (
                    <p className="card-text">
                      How might data, wearable technology, and appropriate
                      support help people take control of their journey to
                      better health?
                    </p>
                  )}
                  {!dataAgency && (
                    <h2 className="card-text">Personal Data and Agency</h2>
                  )}
                </div>
              </Card>
            </Col>

            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setFoodInsecurity(true)}
              onMouseLeave={() => setFoodInsecurity(false)}
            >
              <Card hoverable className="foodInsecurity-card">
                <div className="card-bg">
                  {foodInsecurity && (
                    <p className="card-text">
                      How might we ensure that everyone in San Diego has
                      reliable access to nutritious and affordable food?
                    </p>
                  )}
                  {!foodInsecurity && (
                    <h2 className="card-text">Food Insecurity</h2>
                  )}
                </div>
              </Card>
            </Col>

          </Row>
        </div>
        {/* Environment */}
        <div className="challenge">
            <h4 className="text" ref={environment}>
                <span>ENVIRONMENT: </span>How might we prepare San Diego for natural
                and human-influenced environmental challenges?
              </h4>
          <Row type="flex" justify="center">
            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setEducation(true)}
              onMouseLeave={() => setEducation(false)}
            >
              <Card hoverable className="education-card">
                <div className="card-bg">
                  {education && (
                    <p className="card-text">
                      How might we make people more aware of and responsible for
                      their own personal impact on the environment?
                    </p>
                  )}
                  {!education && (
                    <h2 className="card-text">Education and Awareness</h2>
                  )}
                </div>
              </Card>
            </Col>

            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setWaste(true)}
              onMouseLeave={() => setWaste(false)}
            >
              <Card hoverable className="waste-card">
                <div className="card-bg">
                  {waste && (
                    <p className="card-text">
                      How might we create a circular loop that transforms
                      “waste” into useful resources?
                    </p>
                  )}
                  {!waste && <h2 className="card-text">Waste Management</h2>}
                </div>
              </Card>
            </Col>

            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setGrid(true)}
              onMouseLeave={() => setGrid(false)}
            >
              <Card hoverable className="grid-card">
                <div className="card-bg">
                  {grid && (
                    <p className="card-text">
                      How might we design services to help people monitor and
                      better allocate energy resources at home and across
                      neighborhoods?
                    </p>
                  )}
                  {!grid && <h2 className="card-text">Smart Grid</h2>}
                </div>
              </Card>
            </Col>

            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setClimateInfra(true)}
              onMouseLeave={() => setClimateInfra(false)}
            >
              <Card hoverable className="climateInfra-card">
                <div className="card-bg">
                  {climateInfra && (
                    <p className="card-text">
                      How can we prepare San Diego to be resilient in the face
                      of climate change, beach erosion, and rising water levels?
                    </p>
                  )}
                  {!climateInfra && (
                    <h2 className="card-text">Climate Infrastructure</h2>
                  )}
                </div>
              </Card>
            </Col>

          </Row>
        </div>

        {/* Housing */}
        <div className="challenge">

              <h4 className="text" ref={housing}>
                <span>HOUSING: </span>How might we reimagine housing to meet the needs
                of all San Diegans?
              </h4>
          <Row type="flex" justify="center">

            <Col
              xs={24}
              lg={12}
              onMouseEnter={() => setMixuse(true)}
              onMouseLeave={() => setMixuse(false)}
            >
              <Card hoverable className="mixuse-card">
                <div className="card-bg">
                  {mixuse && (
                    <p className="card-text">
                      How might we foster a sense of place and community in the
                      face of vacation rentals, mixed-use houses, and
                      gentrification?
                    </p>
                  )}
                  {!mixuse && (
                    <h2 className="card-text">
                      Mixed-Use Housing and Placemaking
                    </h2>
                  )}
                </div>
              </Card>
            </Col>

            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setResilient(true)}
              onMouseLeave={() => setResilient(false)}
            >
              <Card hoverable className="resilient-card">
                <div className="card-bg">
                  {resilient && (
                    <p className="card-text">
                      How might we make homes and communities more resilient to
                      the effects of climate change, such as desertification,
                      fires, flooding, and beach erosion?
                    </p>
                  )}
                  {!resilient && <h2 className="card-text">Resilient Homes</h2>}
                </div>
              </Card>
            </Col>

            {/* TODO: Issue with background image not covering entire page */}
            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setHomelessness(true)}
              onMouseLeave={() => setHomelessness(false)}
            >
              <Card hoverable className="homelessness-card">
                <div className="card-bg">
                  {homelessness && (
                    <p className="card-text">
                      How might we address the safety, shelter, and nutritional
                      needs of people who are without housing for short-term and
                      long-term periods of time?
                    </p>
                  )}
                  {!homelessness && <h2 className="card-text">Homelessness</h2>}
                </div>
              </Card>
            </Col>

            <Col
            xs={24}
            lg={12}
              onMouseEnter={() => setIot(true)}
              onMouseLeave={() => setIot(false)}
            >
              <Card hoverable className="iot-card">
                <div className="card-bg">
                  {iot && (
                    <p className="card-text">
                      How might we design services and internet-connected
                      products for the home to make everyday life easier, more
                      fun, and more secure?
                    </p>
                  )}
                  {!iot && (
                    <h2 className="card-text">Internet of Things (IoT)</h2>
                  )}
                </div>
              </Card>
            </Col>

          </Row>
        </div>


      </div>
      <br /><br />
      <Footer/>
    </div>
  );
};

export default ChallengeLayout;
