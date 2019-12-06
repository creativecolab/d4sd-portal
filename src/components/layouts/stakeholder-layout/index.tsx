import React from 'react';
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import { stakeholderContent } from "../../../assets/content.js";

const StakeholderLayout = (props: any) => {
  return (
    <div>
      <Header title={stakeholderContent.title1} content={stakeholderContent.content1} image={stakeholderContent.image}/>
      <div className="container">
        <div className="section">
          <h2>{stakeholderContent.title2}</h2>
          {stakeholderContent.content2.map((content) => {
            return (
              <div>
                <h4 style={{"textAlign":"left"}} dangerouslySetInnerHTML={{__html:content.title}}></h4>
                <p dangerouslySetInnerHTML={{__html:content.txt}}/>
              </div>
            )
          })}
          </div>
          <div className="section">
          <h2>{stakeholderContent.title3}</h2>
          {stakeholderContent.content3.map((content) => {
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

export default StakeholderLayout
