import React, { useState } from "react";
import { Row, Col, Steps, Button, Carousel, Card } from "antd";
import Menubar from "../../menubar/index";
import "./style.less";

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

  return (
    <div>
      <Menubar />
      <div className="ChallengeLayout">
        <div className="landing-div">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h2 className="text">Challenge Briefs</h2>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 12 }}>
              <p>
                What does it mean to be a Sustainable City? For us, a
                sustainable San Diego is one where all parts of our city connect
                and support each other and the environment. Working together, we
                can design ways to improve mobility, health, housing, and the
                climate for our region.
              </p>
            </Col>
          </Row>
        </div>

        <div className="challenge-icons">
          <Row justify="center" type="flex">
            <Col xs={{ span: 10 }} md={{ span: 4 }}>
              <figure>
                <img src={ChallengeMobility}></img>
                <figcaption>Mobility</figcaption>
              </figure>
            </Col>
            <Col xs={{ span: 10 }} md={{ span: 4 }}>
              <figure>
                <img src={ChallengeClimate}></img>
                <figcaption>Environment</figcaption>
              </figure>
            </Col>
            <Col xs={{ span: 10 }} md={{ span: 4 }}>
              <figure>
                <img src={ChallengeHousing}></img>
                <figcaption>Housing</figcaption>
              </figure>
            </Col>
            <Col xs={{ span: 10 }} md={{ span: 4 }}>
              <figure>
                <img src={ChallengeHealth}></img>
                <figcaption>Health</figcaption>
              </figure>
            </Col>
          </Row>
        </div>

        <div className="fit-in">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h2 className="text">How do you fit in?</h2>
            </Col>
            <Col xs={{ span: 20 }} md={{ span: 15 }}>
              <p>
                Everyone is important in advancing a more sustainable San Diego,
                including you! Below are several examples of challenges that we
                can address, together. This is just the start of our collective
                effort. If you see a problem not listed here, go investigate it
                and share back to the D4SD discussion forum, or come to an event
                where you can motivate others to join you.
              </p>
            </Col>
          </Row>
        </div>

        {/* Mobility */}
        <div className="challenge">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h2 className="text">
                <b>MOBILITY: </b>How might we help people move freely in San
                Diego?
              </h2>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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

            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>

            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>

            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>

            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>

            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
          </Row>
        </div>

        {/* Environment */}
        <div className="challenge">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h2 className="text">
                <b>ENVIRONMENT: </b>How might we prepare San Diego for natural
                and human-influenced environmental challenges?
              </h2>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
          </Row>
        </div>

        {/* Housing */}
        <div className="challenge">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h2 className="text">
                <b>HOUSING: </b>How might we reimagine housing to meet the needs
                of all San Diegans?
              </h2>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            {/* TODO: Issue with background image not covering entire page */}
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
          </Row>
        </div>

        {/* Health */}
        <div className="challenge">
          <Row type="flex" justify="center">
            <Col xs={{ span: 20 }} md={{ span: 20 }}>
              <h2 className="text">
                <b>HEALTH: </b>How might we help all San Diegans live healthy
                and active lives?
              </h2>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 0 }}></Col>
            <Col
              xs={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 8 }}
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
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ChallengeLayout;
