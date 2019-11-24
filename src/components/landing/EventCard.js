import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import event1 from '../../assets/img/event1.jpg';
import '../style.less';

class EventCard extends Component {
  render() {
    return (
      <div id="event-card" className="w-100 pb-4">
        <img src={event1} alt="event1" className="w-100 rounded-lg" />
        <br />
        <br />
        <h5 className="font-weight-bold text-center">{this.props.title}</h5>
        <h5 className="text-center">{this.props.date}</h5>
        <p className="text-center">
          <i className="fas fa-map-marker-alt pr-2" />
          {this.props.location}
        </p>
      </div>
    );
  }
}

export default EventCard;
