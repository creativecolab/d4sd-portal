import React, { useState } from 'react';
import {Row, Col, Steps, Button, Timeline, Card, Progress} from '@d4sd/components';
import Menubar from '../../menubar/index';
import './style.less'

const WorkspaceLayout = (props: any) => {
  const [title, setTitle] = useState("D4SD Workspace");

  // closed sets whether or not card is disabled or not
  const cards = [
    {title:"Discover a Challenge", desc:"Submit your problem description and solution proposal here", closed:false,},
    {title:"Register your Team", desc: "Learn about the challenges surrounding San Diego", closed:false,dueDate: new Date("11/23/2019, 11:59:00 PM"), submitted:true},
    {title:"Submit a Preliminary Concept", desc:"Submit your problem description and solution proposal here", closed:false, dueDate: new Date("12/12/2019, 11:59:00 PM"), submitted:false},
    {title: "Request and Provide Feedback", desc:"Feedback will be available once you’ve made a submission", closed:true, dueDate: new Date("12/18/2019, 11:59:00 PM"), submitted:false},
    {title: "Submit Your Team’s Final Concept", desc:"Final submission will be available once you’ve made a submission", closed:true, dueDate: new Date("12/24/2019, 11:59:00 PM"), submitted:false},
    {title:"View Community Voting Results", desc:"Judging will be available at the end of the competition", closed:true, dueDate: new Date("01/24/2020, 11:59:00 PM"), submitted:false}
  ]

  const calcPercentTimeLeft = (dueDate: Date) => {
    let currDate = new Date();
    // @ts-ignore
    let timeLeft: number = (dueDate - currDate);

    let hoursLeft = timeLeft/(1000 * 60 *60);
    return (hoursLeft / (30 * 24)) * 100
  }
  const calcDaysLeft = (dueDate: Date) => {
    let currDate = new Date();
    // @ts-ignore
    let timeLeft: number = (dueDate - currDate);

    let daysLeft = timeLeft/(1000 * 60 * 60 * 24);
    return Math.floor(daysLeft).toFixed(0);
  }

  return (
    <div>
      <Menubar />
      <div className="WorkspaceLayout">
        <Row className="heading">
        <h1 className="heading-message">
          {title}
        </h1>
        </Row>
        <div className="timelineWrapper">
        <Timeline className="timeline" type="card">
          {cards.map((card) => {
            return (
              <Timeline.Item>
                <Card className="timeline-card">
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
                  { !card.closed && card.dueDate && (card.submitted || !card.submitted) &&
                  <div>
                    <div className="card-status">{card.submitted ? <span className="submitted">SUBMITTED </span> : <span className="no-submit">NO SUBMISSION</span>}</div>
                    <Progress percent={calcPercentTimeLeft(card.dueDate)} status={card.submitted ? "success" : undefined} className={card.submitted ? "progressBar success" : "progressBar warning"}/>
                    <div className="card-dates">DUE:
                      <span className={card.submitted ? "due-date success" : "due-date warning"}>{" " + card.dueDate.toLocaleDateString() + " " + card.dueDate.toLocaleTimeString()}</span>
                      <span className="days-left">{calcDaysLeft(card.dueDate)} DAYS LEFT</span>
                    </div>
                  </div> }
                </Card>
              </Timeline.Item>
            )
          })}
        </Timeline>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceLayout;
