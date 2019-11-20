import styled from 'styled-components';
import { device } from './breakpoints.js';

//For titles on the header
export const H1 = styled.h1 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #333333;
    position: relative;
    z-index: 100;
    padding: 0 14px;
    text-align: ${props => props.center ? "center":"inherit"}
    @media ${device.mobileS} {
        font-size: 30px;
    }
    @media ${device.laptopL} {
        font-size: 2.5em!important;
    }
    @media ${device.desktop} {
        font-size: 4.0em!important;
    }
`

//For questions on the homepage and subtitles on about page
export const H2 = styled.h2 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: ${props => props.white ? "white":"#333333"};
    position: relative;
    z-index: 100;
    padding: 0 14px;
    margin: auto;
    text-align: ${props => props.center ? "center":"inherit"}
    @media ${device.mobileS} {
        width: ${props => props.half ? "100%":""};
        font-size: 24px;
    }
    @media ${device.tablet} {
        width: ${props => props.half ? "60%":""};
    }
    @media ${device.laptopL} {
        width: ${props => props.half ? "70%":""};
        font-size: 2em!important;
    }
    @media ${device.desktop} {
        width: ${props => props.half ? "70%":""};
        font-size: 3.5em!important;
    }
`

//
export const H3 = styled.h3 `
    font-family: 'Open Sans', sans-serif;
    color: #A7A7A7;
    text-align: ${props => props.left ? "left":""};
    font-weight: ${props => props.thin ? "400":"700"};
    line-height: 1em;
    margin: ${props => props.thin ? "0 15px":"15px 15px"};
    @media ${device.mobileS} {
        font-size: 0.8em;
    }
    @media ${device.laptopL} {
        font-size: 1.1em;!important;
        line-height: 1.3em!important;
    }
    @media ${device.desktop} {
        font-size: 1.9em!important;
    }
`

//For card title in get involve page
export const H4 = styled.h4 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: ${props => props.gray ? "#999999":"#333333"};
    position: relative;
    z-index: 100;
    padding: 0 14px;
    width: 100%;
    text-align: ${props => props.left ? "left":"center"};
    @media ${device.mobileS} {
        font-size: 1.25em;
    }
    @media ${device.laptopL} {
        font-size: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 2.5em!important;
    }
`

//For all paragraphs
export const H5 = styled.h5 `
    font-family: 'Open Sans', sans-serif;
    color: ${props => props.gray ? "#999999":"#333333"};
    line-height: 1.5em;
    padding: 0 14px;
    text-align: ${props => props.center ? "center":"left"};
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.20em;!important;
        line-height: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`

export const Styledh5 = styled(H5) `
  border: ${props => props.hovered ? "2px solid #25497A":"1px solid #25497A"};
  color: #25497A;
  padding: 8px 14px;
  font-family: 'Montserrat', sans-serif;
  background-color: rgba(68, 151, 255, 0.2);
  border-radius: 10px;
  font-weight: ${props => props.hovered ? "600":""};
  cursor: ${props => props.hovered ? "pointer":""};
  @media ${device.mobileS} {
      font-size: 1em;
  }
  @media ${device.laptopL} {
      font-size: 1.1em;!important;
      line-height: 1.5em!important;
  }
  @media ${device.desktop} {
      font-size: 2em!important;
  }
`

//For footer
export const H6 = styled.h6 `
    font-family: 'Open Sans', sans-serif;
    color: ${props => props.light ? "#D0D0D0":"#333333"};
    text-align: ${props => props.left ? "left":"center"};
    line-height: 1em;
    @media ${device.mobileS} {
        font-size: 0.7em;
    }
    @media ${device.laptopL} {
        font-size: 1em;!important;
        line-height: 1.2em!important;
    }
    @media ${device.desktop} {
        font-size: 1.7em!important;
    }
`

//For all paragraphs
export const IconTitle = styled.h5 `
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.gray ? "#999999":"#333333"};
    line-height: 1.5em;
    font-weight: 600;
    padding: 0 14px;
    text-align: ${props => props.center ? "center":"left"};
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.20em;!important;
        line-height: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`

export const P = styled.p `
    font-family: 'Open Sans', sans-serif;
    color: #999999;
    padding-top: 11px;
    @media ${device.mobileS} {
        font-size: 0.7em;
    }
    @media ${device.laptopL} {
        font-size: 0.9em;!important;
    }
    @media ${device.desktop} {
        font-size: 1.7em!important;
    }
`


export const A = styled.a `
    font-family: 'Open Sans', sans-serif;
    color: #4496FF;
    &:hover {
      color: #8FC0FF;
      text-decoration: none;
    }
`
