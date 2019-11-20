import React, { Component } from 'react';
import { FAQBtn } from '../../assets/css/buttons.js';
import { H2, H3, H5 } from '../../assets/css/fonts.js';
import { Card, OuterFlexBox, InnerFlexBox, OuterContainer, InnerContainer, FlexibleWidth, StyledCarouselProvider } from '../../assets/css/containers.js';
import { Br } from '../../assets/css/others.js';

class FAQCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  getContentToggleHeight() {
    if (this.state.open) {
      return 'auto';
    }
    return '0';
  }

  toggleContent = () => {
    this.setState({
      open: !(this.state.open),
    });
  }

  render() {
    const contentStyle = { height: this.getContentToggleHeight() };
    return (
      <div id={this.props.question}>
        <div>
            <FAQBtn onClick={this.toggleContent}>
              <Card theme={{padding: "18px 20px 10px 20px"}}>
                <InnerFlexBox center>
                  <H5 gray={this.state.open}>{this.props.question}</H5>
                  {this.state.open ? <i className="fas fa-chevron-up" style={{"color":"rgba(0, 0, 0, 0.5)"}}></i>:<i className="fas fa-chevron-down" style={{"color":"rgba(0, 0, 0, 0.5)"}}></i>}
                </InnerFlexBox>
              <div className={!this.state.open ? "d-none":"d-block"}>
                <hr/>
                <H5
                  dangerouslySetInnerHTML={{
                    __html: this.props.answer,
                  }}
                />
              </div>
              </Card>
            </FAQBtn>
        </div>
      </div>
    );
  }
}

export default FAQCard;
