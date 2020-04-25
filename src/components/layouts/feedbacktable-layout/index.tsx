import React, { useState, useEffect } from 'react';
import { Table } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import './style.less';
import firebase from '../../../actions/firebase';
import { joinDesignJam } from '../../../assets/content';
import { FeedbackData } from '../../../actions/types';

const columns = [
  {
    title: 'key',
    dataIndex: 'key'
  },
  {
    title: 'Feedback Link',
    dataIndex: 'feedlink',
    render: (text: string) => <a href={text}>{text}</a>
  },
  {
    title: 'View Feedback Link',
    dataIndex: 'vfeedlink',
    render: (text: string) => <a href={text}>{text}</a>
  },
  {
    title: 'Feedback Providers',
    dataIndex: 'prov'
  },
  {
    title: 'Amount of Feedback',
    dataIndex: 'amt',
    defaultSortOrder: 'descend',
    sorter: (a: IInterfaceData, b: IInterfaceData) => a.amt - b.amt
  }
];

interface IInterfaceData {
  key: string;
  feedlink: string;
  vfeedlink: string;
  amt: number;
  prov: string;
}

const dummydata: IInterfaceData[] = [
  {
    key: 'K1PXUny44KQzew2oIOR8',
    feedlink:
      'https://d4sd.org/volunteer/provide_feedback/K1PXUny44KQzew2oIOR8',
    vfeedlink:
      'https://d4sd.org/volunteer/provide_feedback/K1PXUny44KQzew2oIOR8',
    amt: 12,
    prov: 'Frank G.'
  },
  {
    key: 'K1PXUny44KQzew2oIOR8',
    feedlink:
      'https://d4sd.org/volunteer/provide_feedback/K1PXUny44KQzew2oIOR8',
    vfeedlink:
      'https://d4sd.org/volunteer/provide_feedback/K1PXUny44KQzew2oIOR8',
    amt: 12,
    prov: 'Frank G.'
  }
];

// ah yes callback hell
const FeedBackTablePage = (): JSX.Element => {
  const [feedbackData, setData] = React.useState([]);

  React.useEffect(() => {
    const data: any = [];

    let promiseList: Array<Promise<FeedbackData[]>> = [];
    firebase.getSubmitIDs().then((res: any) => {
      res.forEach((element: any) => {
        promiseList.push(firebase.getFeedbackForSubmission(element.secretID));
      });
      Promise.all(promiseList).then((feedbackDataLists) => {
        feedbackDataLists.forEach((ret) => {
          if (ret.length) {
            let names = '';
            ret.forEach((elem: any) => {
              const sorted: string = elem.name ? elem.name : 'Anonymous';
              names += `${sorted} | `;
            });
            let secretID = ret[0].documentID;
            data.push({
              key: secretID,
              feedlink: `${window.location.origin}/volunteer/provide_feedback/${secretID}`,
              vfeedlink: `${window.location.origin}/community-feedback/${secretID}`,
              prov: names,
              amt: ret.length
            });
          }
        });
        setData(data);
      });
    });
    
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
