import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'antd';
import Footer from '../../Footer/index';
import './style.less';
import { covidContent } from '../../../assets/content';

const CovidLayout = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className="CovidPage">
      <Row
        type="flex"
        justify="center"
        id="banner-image"
        style={{
          backgroundImage: `url(${covidContent.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <div className="page-head">
        <div className="container">
          <h1>{covidContent.title}</h1>
          <p>{covidContent.content}</p>
        </div>
      </div>
      <div className="section" id="section-1">
        <div className="container">
          <h2 className="title">{covidContent.title_1}</h2>
          <p>{covidContent.content_1_1}</p>
          <p>
            {covidContent.content_1_2}
            {/* eslint-disable-next-line */}
            <a href="" onClick={(evt: React.MouseEvent<HTMLAnchorElement>): void => { evt.preventDefault(); history.push('/resources'); }}>resources</a>
            {covidContent.content_1_3}
            {/* eslint-disable-next-line */}
            <a href="" onClick={(evt: React.MouseEvent<HTMLAnchorElement>): void => { evt.preventDefault(); history.push('/challenges'); }}>challenge information</a>
            {covidContent.content_1_4}
            <a href="https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU" target="_blank" rel="noopener noreferrer">D4SD slack workspace</a>
            {covidContent.content_1_5}
          </p>
          <p dangerouslySetInnerHTML={{__html:covidContent.content_1_6}} />
          <p>
            {covidContent.content_1_10}
            {/* eslint-disable-next-line */}
            <a href="" onClick={(evt: React.MouseEvent<HTMLAnchorElement>): void => { evt.preventDefault(); history.push('/volunteer'); }}>{covidContent.content_1_11}</a>
            {covidContent.content_1_12}
          </p>
          <p>
            <b>{covidContent.title_2}</b>
            <ul>
              {covidContent.links.map(({ label, url }) => (
                url === '/' ? (
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="" onClick={(evt: React.MouseEvent<HTMLAnchorElement>): void => { evt.preventDefault(); history.push('/'); }}>{label}</a>
                  </li>
                ) : (
                  <li>
                    <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                  </li>
                )
              ))}
            </ul>
          </p>
          <p>
            <b>{covidContent.title_3}</b>
            <ul>
              {covidContent.tips.map((tip) => (
                <li>{tip}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <div className="section" id="section-2" />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CovidLayout;
