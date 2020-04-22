import React from 'react';
import { Button, Table } from '@d4sd/components';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import { feedbackContent } from '../../../assets/content';

const columns = [
  {
    title: 'Idea',
    dataIndex: 'name'
  },
  {
    title: 'Members',
    dataIndex: 'mem'
  },
  {
    title: 'Feedback Providers',
    dataIndex: 'prov'
  },
  {
    title: 'Amount of Feedback',
    dataIndex: 'feed',
    defaultSortOrder: 'descend',
    // @ts-ignore
    sorter: (a, b) => a.feed - b.feed
  }
];

const data = [
  {
    key: '1',
    name: 'Link to Idea #1',
    mem: 'Bob, Joe, Jane',
    feed: 12,
    prov: 'Bob, Joe, Jane'
  },
  {
    key: '2',
    name: 'Link to Idea #2',
    mem: 'Bob, Joe, Jane',
    feed: 312,
    prov: 'Bob, Joe, Jane'
  },
  {
    key: '3',
    name: 'Link to Idea #3',
    mem: 'Bob, Joe, Jane',
    feed: 342,
    prov: 'Bob, Joe, Jane'
  },
  {
    key: '4',
    name: 'Link to Idea #4',
    mem: 'Bob, Joe, Jane',
    feed: 3,
    prov: 'Bob, Joe, Jane'
  }
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}

const FeedBackTablePage = (): JSX.Element => (
  <div>
    <Header
      title={feedbackContent.title1}
      content={feedbackContent.content1}
      image={feedbackContent.image}
    />
    <div className="container paragraph">
      {/*
  // @ts-ignore */}
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
    <br />
    <br />
    <Footer />
  </div>
);

export default FeedBackTablePage;
