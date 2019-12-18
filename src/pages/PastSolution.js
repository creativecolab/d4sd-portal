/* eslint-disable */

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';

import audioMovement from '../assets/img/sol_audioMovement.jpg';
import beachAccess from '../assets/img/sol_beachAccess.png';
import cycleDetection from '../assets/img/sol_cycleDetection.jpg';
import gate from '../assets/img/sol_gate.jpg';
import remoteService from '../assets/img/sol_remoteService.jpg';
import roadMap from '../assets/img/sol_roadMap.jpg';
import sdParking from '../assets/img/sol_sdParking.jpg';
import spot from '../assets/img/sol_spot.jpg';

import './style.css';

class PastSolution extends Component {
  render() {
    const data = [
      {
        teamName: 'Cycle Detection',
        position: 1,
        memberList: 'Stephen Cerruti, D.J. Nelson, Savera Soin, James Maron',
        teamImg: cycleDetection,
        projectDesc: 'How can we make bicycles more visible to cars of the future? We think DSRC, the technology behind V2V communication, may be the answer.',
        link: ''
      },
      {
        teamName: 'AV onDemand: Remote Service Provider for Autonomous vehicles',
        position: 2,
        memberList: 'Marissa Hing, Alex Tunchez, Jacob Browne, Josh Duhay, Claire Pham',
        teamImg: remoteService,
        projectDesc: 'Hired specialists remotely maneuver AVs through areas of uncertain conditions allowing all riders to travel with no takeover responsibility.',
        link: 'http://joshduhay.herokuapp.com/av.html'
      },
      {
        teamName: 'Spot: Your Guide to Safe and Walkable Cities',
        position: 3,
        memberList: 'Sayamon Riddang, Natalie Terenzi',
        teamImg: spot,
        projectDesc: 'Spot is an app that provides the blind and visually impaired with accessibility-focused walking directions, using data from GE streetlamps.',
        link: 'http://naterenzi.portfoliobox.net/spot'
      },
      {
        teamName: 'GATE Center: Immersive AV Learning Center',
        memberList: 'Garret Hoover, Selene Hoover, Jessica Yeung',
        teamImg: gate,
        projectDesc: 'An education center where the public directly engages with AVs, accesses learning resources, and provides feedback for stakeholder insights.',
        link: 'https://astrotransits.wixsite.com/gate1/about-1'
      },
      {
        teamName: 'Beach Access For All',
        memberList: 'Andrea Flagiello, Matt Abbondanzio, Tomas Robinson, Daniel Lenzen',
        teamImg: beachAccess,
        projectDesc: 'We wish to redefine the beach experience for those with limited mobility. Our solution is an automated, shared-use, mobility aid service designed for the beach environment.',
        link: ''
      },
      {
        teamName: 'Road Map',
        memberList: 'Anna Chen, Marie McNamara',
        teamImg: roadMap,
        projectDesc: 'An app focused on the iterative design process, bringing professionals and the public together to share designs, expertise, and feedback.',
        link: ''
      },
      {
        teamName: 'San Diego Parking App',
        memberList: 'Tyler Reinecke, Thomas Twomey,  Jangwoo Lee, Adrian Derderian, Dave Dunn',
        teamImg: sdParking,
        projectDesc: 'An app that shows available parking within downtown San Diego.',
        link: ''
      },
      {
        teamName: 'Audio Movement',
        memberList: 'Ting Wei Lin, Nathaniel Moreno, James Rich, Danfei  Sun, Diana Nguyen',
        teamImg: audioMovement,
        projectDesc: 'WiFi installation on all MTS vehicles, improving the experience of regular MTS commuters, through education and entertainment resources.',
        link: 'https://www.amwebportfolio.com/'
      }
    ];

    return (
      <div id="about">
        <Navbar />
        <div className="div-large" />
        <h3 className="font-weight-bold">Past Solutions</h3>
        <div className="d-flex flex-wrap justify-content-around">
          {data.map((data) => (
            <div>
              <img
                src={data.teamImg}
                alt="team"
              />
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        {' '}
        <br />
        <br />
        <FooterCard />
      </div>
    );
  }
}

export default PastSolution;
