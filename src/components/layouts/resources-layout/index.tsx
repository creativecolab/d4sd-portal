import React from 'react';
import {
  Row, Col, Card
} from '@d4sd/components';
import { NavLink } from 'react-router-dom';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { resourcesContent } from '../../../assets/content';

// TODO: Add breadcrumb / Learn more linking to navbar highlight / stakeholder highlight
// Remove buttons / opening on a new tab /

interface ITabDiv {
  label: string;
  // eslint-disable-next-line
  children: any;
}

const ResourcesLayout = (): JSX.Element => {
  // eslint-disable-next-line
  const TabDiv = (props: ITabDiv): JSX.Element => <>{props.children}</>;

  return (
    <div>
      <Header
        title={resourcesContent.title1}
        content={resourcesContent.content1}
        image={resourcesContent.image}
      />
      <div className="container paragraph">
        <div className="red">
          {/* <h1 className="cardtitle">FEATURED RESOURCES</h1> */}
          <Row type="flex" justify="center" gutter={[32, 16]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <NavLink to="/resources/process">
                <Card className="involve-card">
                  <h1 className="title">D4SD Process Guide</h1>
                  <h3 className="source">Design for San Diego</h3>
                  <p>
                    Modeled after best practices in human-centered design
                    research, the D4SD process involves five key phases:
                    Discovery, Ideate, Prototype, Pitch, Activate. Read more
                    about how you and your team can get the most out of each
                    phase.
                  </p>
                </Card>
              </NavLink>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <NavLink to="/resources/stakeholder">
                <div className="blue">
                  <Card className="involve-card">
                    <h1 className="title">Stakeholder Relationships</h1>
                    <h3 className="source">Design for San Diego</h3>
                    <p>
                      Good civic design involves understanding the diverse
                      perspectives of many stakeholders, including people
                      directly and indirectly impacted by a problem or
                      opportunity. This guide can help D4SD participants
                      establish and cultivate community relationships.
                    </p>
                  </Card>
                </div>
              </NavLink>
            </Col>
          </Row>
          <h1 className="othertitle">External references</h1>
          <div className="submitmore">
            <p>
              The D4SD team, working with our educator alliance, has collected
              a series of resources to help you and your team innovate on the
              D4SD challenges. For a more complete and up-to-date list of resources, please
              {' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1BuLEN-JLFrEEPW2mlQ-mk93tP4kpFaIHSOA1UZU1F-I/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                see the following Google Sheet
              </a>
              . If you have a design or data-related resource to share, please
              {' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfuHbBGqH3nonF2O04O-69y4J5CVcVEtUqCwG5suMaaEKGR2g/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                submit them on this Google Form
              </a>
            </p>
          </div>

          <div className="allcards">
            {resourcesContent.process.other.map((content) => (
              <a
                href={content.link} target="_blank" rel="noopener noreferrer"
                key={`${content.title.toLowerCase().split(' ').join()}_a`}
              >
                <div className="extra">
                  <h1>{content.title}</h1>
                  <h3>{content.source}</h3>
                </div>
              </a>
            ))}
            {resourcesContent.community.other.map((content) => (
              <a
                href={content.link} target="_blank" rel="noopener noreferrer"
                key={`${content.title.toLowerCase().split(' ').join()}_a`}
              >
                <div className="extra-community">
                  <h1>{content.title}</h1>
                  <h3>{content.source}</h3>
                </div>
              </a>
            ))}
            {resourcesContent.data.other.map((content) => (
              <a
                href={content.link} target="_blank" rel="noopener noreferrer"
                key={`${content.title.toLowerCase().split(' ').join()}_a`}
              >
                <div className="extra-data">
                  <h1>{content.title}</h1>
                  <h3>{content.source}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ResourcesLayout;
