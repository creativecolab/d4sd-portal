import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
import HeaderCard from '../components/landing/HeaderCard';
// Contents
import { aboutContent } from '../assets/content.js';
// Styles
import { Bg, Br } from '../assets/css/others.js';
import {
  OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox, ToggleFlexBox,
} from '../assets/css/containers.js';
import { H2, H5 } from '../assets/css/fonts.js';
import { device } from '../assets/css/breakpoints.js';
import { Btn, ToggleBtn, BtnSecondary } from '../assets/css/buttons.js';
import { FlexibleImg } from '../assets/css/images.js';

import whitepaper from '../assets/img/D4SD_2017_WhitePaper.pdf';
import header from '../assets/img/about_header.svg';
import ppttimeline_horizontal from '../assets/img/about_participants_horizontal.svg';
import commtimeline_horizontal from '../assets/img/about_community_horizontal.svg';
import ppttimeline_vertical from '../assets/img/about_participants_vertical.svg';
import commtimeline_vertical from '../assets/img/about_community_vertical.svg';
import diagram from '../assets/img/about_diagram.png';

import './style.css';

const H5Half = styled(H5)`
    width: 90%;
`;

const ResponsiveImgVertical = styled.img`
    width: 100%;
    @media ${device.mobileS} {
        display: ${(props) => (props.isInnovator ? 'inline' : 'none')}
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const ResponsiveImgHorizontal = styled.img`
    width: 100%;
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: ${(props) => (props.isInnovator ? 'inline' : 'none')}
    }
`;

class About extends Component {
  constructor() {
    super();
    this.state = ({
      overview: true,
      join: false,
      value: false,
      timeline: false,
      review: false,
      isInnovator: true,
      role: "Innovators'",
    });
    this.overview = React.createRef();
    this.join = React.createRef();
    this.value = React.createRef();
    this.timeline = React.createRef();
    this.review = React.createRef();
  }

  scrollToRef = (ref) => {
    console.log('before');
    console.log(ref.current);
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    const states = ['overview', 'join', 'value', 'timeline', 'review'];
    states.forEach((state) => {
      if (state === ref.current.id) {
        this.setState({ [ref.current.id]: true });
      } else {
        this.setState({ [state]: false });
      }
    });
    console.log('after');
    console.log(this.state);
  }

  toggle = (e) => {
    console.log('participantcall');
    this.setState((prevState) => ({
      isInnovator: !prevState.isInnovator,
    }));
  }

  innovator = () => {
    this.setState((prevState) => ({
      isInnovator: true,
    }));
  }

  community = () => {
    this.setState((prevState) => ({
      isInnovator: false,
    }));
  }

  onHover = (e) => {
    console.log('hoverr');
    console.log(e.target);
  }


  unHover = (e) => {

  }

  render() {
    return (
      <div id="about">
        <Navbar />
        <br />
        <br />
        <HeaderCard title={aboutContent.title1} content={aboutContent.content1} bg={header} isAction="false" />
        <Br />
        <Br />
        <Bg ref={this.join} id="join">
          <OuterContainer>
            <InnerContainer>
              <H2 center>{aboutContent.title2}</H2>
              <br />
              <H5>{aboutContent.content2}</H5>
              <Br />
              <FlexibleImg theme={{ width: '100%' }} src={diagram} alt="diagram" />

            </InnerContainer>
          </OuterContainer>
        </Bg>

        <Br />
        <Br />

        <Bg theme={{ color: '#EFF8FF' }} ref={this.value} id="value">
          <OuterContainer>
            <InnerContainer>
              <Br />
              <Br />
              <H2 center>{aboutContent.title3}</H2>
              <br />
              <OuterFlexBox>
                {aboutContent.content3.map((value, i) => (
                  <InnerFlexBox half key={i}>
                    <FlexibleImg theme={{ width: '9%' }} src={value.img} />
                    <H5Half left>{value.txt}</H5Half>
                  </InnerFlexBox>
                ))}
              </OuterFlexBox>
              <Br />
              <Br />
            </InnerContainer>
          </OuterContainer>
        </Bg>

        {/**  <Bg ref={this.timeline} id="timeline">
            <OuterContainer>
              <InnerContainer>
              <H2 center>{aboutContent.title4}</H2>
              <br/>
              <H5 left>{aboutContent.content4}</H5>
              <Br/>
              <ToggleFlexBox middle>
                <ToggleBtn left onClick={this.innovator} active={this.state.isInnovator}>Innovators</ToggleBtn>
                <ToggleBtn onClick={this.community} active={!this.state.isInnovator}>Community members</ToggleBtn>
              </ToggleFlexBox>
              <Br/>
            </InnerContainer>
            <ResponsiveImgVertical src={ppttimeline_vertical} isInnovator={this.state.isInnovator} />
            <ResponsiveImgVertical src={commtimeline_vertical} isInnovator={!this.state.isInnovator} />
            <ResponsiveImgHorizontal src={ppttimeline_horizontal} isInnovator={this.state.isInnovator} />
            <ResponsiveImgHorizontal src={commtimeline_horizontal} isInnovator={!this.state.isInnovator} />
            </OuterContainer>
          </Bg>

          <Bg theme={{color: "#EFF8FF"}} ref={this.review} id="review">
            <OuterContainer>
              <Br/><Br/>
              <InnerContainer>
              <H2 center>{aboutContent.title5}</H2>
              <br/>
              <H5 left>{aboutContent.content5}</H5>
              <Br/>
              <OuterFlexBox center>
                <Btn href={whitepaper} target="_blank">DOWNLOAD 2017 WHITEPAPER</Btn>
                <BtnSecondary href="http://d4sd2017.org" target="_blank" top left>D4SD 2017 WEBSITE</BtnSecondary>
              </OuterFlexBox>
              <Br/><Br/>
              <Br/>
              </InnerContainer>
            </OuterContainer>
          </Bg>
          <IframeContainer>
            <Iframe
              src="https://www.youtube.com/embed/V7LxWFqMm4g?autoplay=1&rel=0&showinfo=0&vq=highres&mute=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
            />
          </IframeContainer>* */}
        <FooterCard />
      </div>
    );
  }
}

export default About;
