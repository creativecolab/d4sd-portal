import React, { Component } from 'react';
import { FAQBtn, SmallBtn, Btn } from '../../assets/css/buttons.js';
import { H2, H3, H4, H5, P } from '../../assets/css/fonts.js';
import { Card, OuterFlexBox, InnerFlexBox, OuterContainer, InnerContainer, FlexibleWidth, StyledCarouselProvider } from '../../assets/css/containers.js';
import { Br } from '../../assets/css/others.js';
class TimelineCard extends Component {

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
          
            <FAQBtn onClick={this.toggleContent} style={{"padding":"0"}}>
              <Card  theme={{paddingS: "10px", paddingM: "20px 10px", paddingL: "30px 50px 30px 30px"}}>
                <InnerFlexBox center>
                  <div>
                  <H4 left>{this.props.stage}</H4>
                  <H3 thin left>{this.props.date}</H3>
                  </div>
                  {this.state.open ? <i className="fas fa-chevron-up" style={{"color":"rgba(0, 0, 0, 0.5)"}}></i>:<i className="fas fa-chevron-down" style={{"color":"rgba(0, 0, 0, 0.5)"}}></i>}
                </InnerFlexBox>
              <div className={!this.state.open ? "d-none":"d-block"}>
                <hr/>
                <H5
                  dangerouslySetInnerHTML={{
                    __html: this.props.detail,
                  }}
                />
                <br/>
                <SmallBtn isAction={this.props.isAction} state={this.props.state} href={this.props.link} target="_blank">{this.props.action}</SmallBtn>
                <P>{this.props.note}</P>
              </div>
              </Card>
            </FAQBtn>
        </div>
      </div>
    );
  }
}

export default TimelineCard;
