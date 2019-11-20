import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
import FAQCard from '../components/landing/FAQCard';
import { faqContent } from '../assets/content.js';
//css
import { Br, Bg } from '../assets/css/others.js';
import { OuterContainer, InnerContainer } from '../assets/css/containers.js';

import './style.css';

class FAQ extends Component {

  render() {
    return (
      <div>
      <Navbar />
      <Br/><Br/><Br/>
      <OuterContainer>
        <InnerContainer>
        {faqContent.map(faqContent => (
          <FAQCard
            key={faqContent.question}
            question={faqContent.question}
            answer={faqContent.answer}
          />
        ))}
        </InnerContainer>
      </OuterContainer>
      <Br/><Br/>
      <FooterCard />
    </div>
    );
  }
}

export default FAQ;
