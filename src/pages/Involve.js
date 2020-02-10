/* eslint-disable */

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox
} from '../assets/css/containers.js';
// import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../components/landing/HeaderCard';
import FooterCard from '../components/landing/FooterCard';
import RoleCard from '../components/landing/RoleCard';
import header from '../assets/img/involve_header.svg';
import { involveContent } from '../assets/content.js';

import './style.css';


class Involve extends Component {
  constructor() {
    super();
    this.state = ({
      hovered: '',
      show: []
    });
    this.innovators = React.createRef();
    this.experts = React.createRef();
    this.educators = React.createRef();
    this.sponsors = React.createRef();
  }

  onHover = (ref) => {
    this.setState({ hovered: ref.current.props.id });
    console.log('clalllll');
    console.log(ref.current.props.id);
  }

  onLeave = (ref) => {
    this.setState({ hovered: 'removed' });
    console.log('noo');
  }

  expand = (ref) => {
    const target = ref.current.props.id;
    if (!this.state.show.includes(target)) {
      (
        this.setState({ show: [...this.state.show, target] })
      );
    } else {
      this.setState({ show: this.state.show.filter((show) => show !== target) });
    }
  }

  render() {
    return (
      <div id="involve">
        <Navbar />
        <br />
        <br />
        <HeaderCard
          title={involveContent.title1}
          content={involveContent.content1}
          bg={header}
          isAction="true"
        />
        <br />
        <br />
        <OuterContainer>
          <InnerContainer>
            <OuterFlexBox>
              {involveContent.roles.map((content, i) => (
                <InnerFlexBox
                  half
                  key={i}
                >
                  <RoleCard
                    onClick={() => this.expand(this[content.id])}
                    ref={this[content.id]}
                    id={content.id}
                    show={this.state.show}
                    title={content.title}
                    txt={content.txt}
                    image={content.image}
                    link={content.link}
                    action={content.action}
                    isAction={content.isAction}
                  />
                </InnerFlexBox>
              ))}
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
        <br />
        <br />
        <FooterCard />
      </div>
    );
  }
}

export default Involve;
