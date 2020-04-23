import React, { useState, useEffect } from 'react';
import { Table } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import './style.less';
import firebase from '../../../actions/firebase';
import { joinDesignJam } from '../../../assets/content';

const columns = [
  {
    title: 'Project name',
    dataIndex: 'name'
  },
  {
    title: 'Feedback Link',
    dataIndex: 'feedlink',
    render: (text: string) => <a href={text}>{text}</a>
  },
  {
    title: 'Members',
    dataIndex: 'members'
  },
  {
    title: 'Feedback Providers',
    dataIndex: 'prov'
  },
  {
    title: 'Amount of Feedback',
    dataIndex: 'amt',
    defaultSortOrder: 'descend',
    // @ts-ignore
    sorter: (a: number, b: number) => a.feed - b.feed
  }
];

interface IInterfaceData {
  key: string;
  name: string;
  feedlink: string;
  members: string;
  amt: number;
  prov: string;
}

const dummydata: IInterfaceData[] = [
  {
    key: 'K1PXUny44KQzew2oIOR8',
    name: 'Autonomous FLM Vehicle Service',
    feedlink: 'https://d4sd.org/volunteer/provide_feedback/K1PXUny44KQzew2oIOR8',
    members: 'Connor Burkesmith, Alex Rusu',
    amt: 12,
    prov: 'Frank G.'
  }
];

const FeedBackTablePage = (): JSX.Element => {
  const [feedbackData, setData] = React.useState([]);

  React.useEffect(() => {
    // @ts-ignore
    setData(dummydata);
  }, []);
  return (
    <div>
      <Header title="Feedback Dashboard" image={joinDesignJam.image} />
      <div className="container paragraph">
        <div className="tablewrapper">
          {/*
// @ts-ignore */}
          <Table columns={columns} dataSource={feedbackData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedBackTablePage;
