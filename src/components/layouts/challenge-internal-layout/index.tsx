import React, { useRef, useState, useEffect } from 'react';
import { Button, Row, Col } from '@d4sd/components';
import { useParams } from 'react-router';
import { challengesContent } from '../../../assets/challenges_content';

import Footer from '../../Footer/index';
import Menubar from '../../menubar';
import '../../../styles/containers.less';
import './style.less';
import AttendLayout from '../attend-layout';
import { string } from 'prop-types';
import { stringLiteralTypeAnnotation } from '@babel/types';

const ChallengeInternalLayout = (): JSX.Element => {
  const ref = useRef<HTMLHeadingElement>(null);

  const { type, title } = useParams();
  // @ts-ignore
  const challengeType = challengesContent[type];

  // @ts-ignore
  const challengeTitle = challengeType[title];

  const challengeTypeHeading = challengeType.title;
  const challengeHeading = challengeTitle.title;
  const challengeHeadInfo = challengeTitle.subTitle;
  const backgroundImageUrl = challengeTitle.image;
  const challengeIntro = challengeTitle.introduction;
  const challengeAngles = challengeTitle.angles;
  const challengeEvidence = challengeTitle.presenting_evidence;
  const allChallengeAngles = challengeTitle.angle_examples;
  const allResourcesPartners = challengeTitle.resources_partners;
  const allResourcesNews = challengeTitle.resources_news;
  const allResourcesNational = challengeTitle.resources_national;

  console.log(backgroundImageUrl);

  console.log(typeof challengeType);
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
    <div className="internal-container">
      <Menubar />
      <Row
        type="flex"
        justify="center"
        id="banner-image"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Col sm={14} xs={20}>
          <h3>{challengeTypeHeading}</h3>
          <h1>{challengeHeading}</h1>
          <p>{challengeHeadInfo}</p>
        </Col>
      </Row>
      <div id="bgImageUp" />
      <Row type="flex" justify="center">
        <Col sm={16} xs={22} id="centralInfo">
          <h2>Introduction</h2>
          <p>{challengeIntro}</p>
        </Col>
      </Row>
      <Row type="flex" justify="center" id="specific-angles">
        <Col sm={16} xs={22}>
          <h2>Specific angles to explore</h2>
          <p>{challengeAngles}</p>
          <p>
            <b>{challengeEvidence}</b>
          </p>

          {allChallengeAngles.map((obj: any) => (
            <p>
              <b>{obj.label}</b>
               :
              {obj.desc}
            </p>
          ))}
          <Button type="primary" size="large" id="joinBtn">
            JOIN THE DISCUSSION
          </Button>
        </Col>
      </Row>
      <Row type="flex" justify="center" id="resources">
        <Col sm={16} xs={22}>
          <h2>Resources</h2>
          <h4>Organizations/Partners/Stakeholders</h4>
          <ul>
            {allResourcesPartners.map((obj: any) => (
              <li>
                <a href={obj.link} target="_blank">
                  {obj.label}
                </a>
              </li>
            ))}
          </ul>
          <h4>News</h4>
          <ul>
            {allResourcesNews.map((obj: any) => (
              <li>
                <a href={obj.link} target="_blank">
                  {obj.label}
                </a>
              </li>
            ))}
          </ul>
          {allResourcesNational && (
            <div>
              <h4>National Context</h4>
              <ul>
                {allResourcesNational.map((obj: any) => (
                  <li>
                    <a href={obj.link} target="_blank">
                      {obj.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ChallengeInternalLayout;
