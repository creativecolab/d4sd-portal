import React from 'react';
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import { processContent } from "../../../assets/content.js";
import processSvg from "../../../assets/img/process_hcd.svg";

const ProcessLayout = (props: any) => {
  return (
    <div>
      <Header title={processContent.title1} content={processContent.content1} image={processContent.image}/>
      <div className="container">
        <div className="paragraph">
          <h2>{processContent.title2}</h2>
          <p dangerouslySetInnerHTML={{__html:processContent.content2}}/>
        </div>
        <img src={processSvg}/>
        <div className="section">
          {processContent.content3.map((content) => {
            return (
              <div>
                <h4 style={{"textAlign":"left"}} dangerouslySetInnerHTML={{__html:content.title}}></h4>
                <p dangerouslySetInnerHTML={{__html:content.txt}}/>
              </div>
            )
          })}
        </div>
      </div>
      <br/><br/>
      <Footer/>
    </div>
  )
}

export default ProcessLayout
