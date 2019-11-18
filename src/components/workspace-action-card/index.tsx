import React from 'react';
import {Card, Progress} from '@d4sd/components';
import './style.less'

function WorkspaceActionCard(props: any) {
  const card = props.card;
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
  )
}

export default WorkspaceActionCard;
