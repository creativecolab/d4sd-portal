import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
import HeaderCard from '../components/landing/HeaderCard';
//CSS styles
import { Br, Bg } from '../assets/css/others.js';
import { Btn, BtnSecondary, StyledButtonBack, StyledButtonNext, StyledDotGroup } from '../assets/css/buttons.js';
import { FlexibleImg } from '../assets/css/images.js';
import { H2, H3, H4, H5, H6, Styledh5 } from '../assets/css/fonts.js';
import { Vl, Hl } from '../assets/css/others.js';
import { Left, Grid, Card, OuterFlexBox, OuterContainer, InnerContainer, FlexibleWidth, StyledCarouselProvider } from '../assets/css/containers.js';
//Contents
import { sampleChallenges, roles, actionImg, logos } from '../assets/content.js';
import header from "../assets/img/process_header.svg";
import { timelineContent } from '../assets/content.js';
import TimelineCard from '../components/landing/TimelineCard';


class Process extends Component {

  constructor() {
    super();
    this.state = {
      hover: "",
      hoveredContent: "",
      click: "",
      clickedContent: ""
    }
  }

  // hover = e => {
  //   const target = e.target.id;
  //   const content = e.target.title;
  //   if (this.state.hover === target) {
  //     this.setState({ hover : "", hoveredContent: "" });
  //   }
  //   else {
  //     this.setState({ hover: target, hoveredContent: content });
  //   }
  // }

  hover = e => {
    const target = e.target.id;
    const content = e.target.title;
    this.setState({ hover: target, hoveredContent: content });
  }

  click = e => {
    const target = e.target.id;
    const content = e.target.title;
    this.setState({ click: target, clickedContent: content });
    console.log(this.state.click)
  }

  render() {
  return (
    <div>
      <Navbar/>
      <Br/>
      <HeaderCard title={timelineContent.title1} content={timelineContent.content1} bg={header} isAction="false"/>
      <OuterContainer>
        <InnerContainer>
          <Grid>
            <div/>
            <div><Vl/></div>
            <div style={{"marginTop":"50px"}}>
              {timelineContent.timeline.map(content => (
                <div>
                  <Hl/>
                  <Left>
                  <TimelineCard
                    stage={content.stage}
                    date={content.date}
                    detail={content.detail}
                    action={content.action}
                    state={content.state}
                    isAction={content.isAction}
                    note={content.note}
                    newpage={content.newpage}
                    link={content.link}
                  />
                  </Left>
                </div>
              ))}
            </div>
          </Grid>
        </InnerContainer>
      </OuterContainer>
      <Br/><Br/>
      <FooterCard />
      </div>
    );
  }
}

export default Process;
