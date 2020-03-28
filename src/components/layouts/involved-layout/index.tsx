import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Row, Col, Card, Avatar, Button
} from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import '../../../styles/containers.less';
import './style.less';
import { involveContent } from '../../../assets/content';

const { Meta } = Card;

const InvolvedLayout = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className="involveLayout">
      <Header
        title={involveContent.title1}
        content={involveContent.content1}
        image={involveContent.image}
      />
      <div className="container paragraph">
        <Row
          gutter={[16, 16]}
          type="flex"
          justify="start"
        >
          {involveContent.roles.map((content) => (
            <Col
              xs={24}
              lg={12}
              key={`${content.key}_Col`}
            >
              <Card
                className="involvecard"
                actions={content.new ? [
                  <a href={content.link} target={content.new}>
                    <Button type="primary">{content.action}</Button>
                  </a>
                ] : [
                  <Button type="primary" onClick={(): void => history.push(content.link)}>{content.action}</Button>
                ]}
              >
                <Meta
                  avatar={(
                    <Avatar
                      src={content.image}
                      className="avatar"
                    />
                  )}
                  title={content.title}
                  description={content.txt}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default InvolvedLayout;
