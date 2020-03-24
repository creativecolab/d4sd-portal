import React from 'react';
import { Button, Row, Col } from '@d4sd/components';
import { useParams } from 'react-router';
import { challengesContent } from '../../../assets/challenges_content';

import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';

type ChallengeAngleType = {
  label: string;
  desc: string;
}

type ResourcesType = {
  label: string;
  link: string;
}

const ChallengeInternalLayout = (): JSX.Element => {
  const { type, title } = useParams();

  // eslint-disable-next-line
  // @ts-ignore
  const challengeType = challengesContent.sections[type];

  // eslint-disable-next-line
  // @ts-ignore
  const challengeTitle = challengeType.challenges[title];

  const challengeTypeHeading = challengeType.title;
  const challengeHeading = challengeTitle.title;
  const challengeHeadInfo = challengeTitle.subTitle;
  const backgroundImageUrl = challengeTitle.image;
  const challengeIntro = challengeTitle.introduction;
  const challengeAngles = challengeTitle.angles;
  const challengeEvidence = challengeTitle.presenting_evidence;
  const allChallengeAngles = challengeTitle.angle_examples;
  const allResources = challengeTitle.resources;

  return (
    <div className="internal-container">
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

          {allChallengeAngles.map((obj: ChallengeAngleType) => (
            <p>
              <b>{obj.label}</b>
               :
              {' '}
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
          <ul>
            {allResources ? allResources.map((obj: ResourcesType) => (
              <li>
                <a href={obj.link} target="_blank" rel="noopener noreferrer">
                  {obj.label}
                </a>
              </li>
            )) : null}
          </ul>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ChallengeInternalLayout;
