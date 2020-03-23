import React, { useState, useRef } from 'react';
import { Row, Col, Card } from '@d4sd/components';
import { Link } from 'react-router-dom';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import {
  challengesContent, ISection, IChallengesContent, IChallengeContent, INav
} from '../../../assets/challenges_content';

const ChallengeLayout = (): JSX.Element => {
  const sectionRefs = [useRef<HTMLHeadingElement>(null), useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null), useRef<HTMLHeadingElement>(null)];

  const [challengeTile, setChallengeTile] = useState<Array<boolean>>(
    [false, false, false, false, false, false, false, false, false, false,
      false, false, false, false, false, false]
  );

  const setTile = (ind: number): Array<boolean> => {
    const defaultSet = [false, false, false, false, false, false, false, false, false, false,
      false, false, false, false, false, false];
    if (ind > -1) defaultSet[ind] = true;
    return defaultSet;
  };

  const { sections } = challengesContent;

  const scrollTo = (ind: number): void => {
    const section = sectionRefs[ind];
    if (section && section.current) {
      const position = section.current.offsetTop - 110;
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
      <Header
        title={challengesContent.title as string}
        content={challengesContent.content as string}
        image={challengesContent.image as string}
      />
      <div className="ChallengeLayout container">
        <div className="section">
          <Row justify="center" type="flex">
            {(challengesContent.nav as Array<INav>).map((nav, i) => (
              <Col xs={10} sm={10} md={6}>
                {/* eslint-disable-next-line */}
                <figure onClick={(): void => scrollTo(i)} className="challengeicons">
                  <img
                    src={nav.img}
                    alt={`challenge-content${i}`}
                  />
                  <h5 className="challenge-icon-caption">
                    {nav.title}
                  </h5>
                </figure>
              </Col>
            ))}
          </Row>
        </div>

        <div className="section">
          <h2 className="text">{challengesContent.title2}</h2>
          {/* eslint-disable-next-line */}
          <p dangerouslySetInnerHTML={{ __html: challengesContent.content2 as string }} />
        </div>

        {Object.keys(sections).map((sect, i) => {
          const section = (sections as ISection)[sect];

          return (
            <div className="challenge">
              <h4 className="text" ref={sectionRefs[i]}>
                {section.heading}
              </h4>
              <Row type="flex" justify="center">
                {Object.keys(section.challenges).map((chlng, j) => {
                  const challenge = (section.challenges as IChallengesContent)[
                    chlng] as IChallengeContent;
                  const index = (i * 4) + j;
                  return (
                    <Col
                      xs={24}
                      lg={12}
                      onMouseEnter={(): void => setChallengeTile(setTile(index))}
                      onMouseLeave={(): void => setChallengeTile(setTile(-1))}
                    >
                      <Link to={`/challenges/${sect}/${chlng}`}>
                        <Card hoverable className={challenge.className}>
                          <div className="card-bg">
                            {challengeTile[index] && (
                              <p className="card-text">
                                {challenge.subTitle}
                              </p>
                            )}
                            {!challengeTile[index] && <h2 className="card-text">{challenge.title}</h2>}
                          </div>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ChallengeLayout;
