import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexibleImg } from '../../assets/css/images.js';
import { H4, H5 } from '../../assets/css/fonts.js';
import { InnerFlexBox, Card, OuterContainer } from '../../assets/css/containers.js';
import { Btn } from '../../assets/css/buttons.js';

class RoleCard extends Component {
  render() {
    // let button;
    // if (this.props.show.includes(this.props.id)) {
    //   button = <i className="fas fa-chevron-up"></i>
    // } else {
    //   button = <i className="fas fa-chevron-down"></i>
    // }
    return (
      <Card
        id={this.props.id}
        ref={this.props.ref}
        theme={{
          padding: '20px', heightS: 'auto', heightM: 'auto', heightL: '60vh',
        }}
      >
        <div>
          <InnerFlexBox center>
            <FlexibleImg theme={{ width: '20%' }} src={this.props.image} />
            <H4 left>{this.props.title}</H4>
          </InnerFlexBox>
          <br />
          <H5 left>{this.props.txt}</H5>
        </div>
        <br />
        <br />
        <OuterContainer center>
          <Btn href={this.props.link} target="_blank">
            {this.props.action}
          </Btn>
        </OuterContainer>
        <br />
        <br />
      </Card>
    );
  }
}

export default RoleCard;
