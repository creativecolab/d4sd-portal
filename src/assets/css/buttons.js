import styled from 'styled-components';
import { device } from './breakpoints.js';
import { ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

//Basic template for all regular buttons (for home, headers etc.)
export const Btn = styled.a `
    cursor: pointer;
    border-radius: 10px;
    color: white;
    background-color: #4497FF;
    font-weight: 700;
    padding: 0.75em 2.25em;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.2s;
    box-shadow: 0px 0px 8px 0px #999999;
    &:hover {
        text-decoration: none;
        color: white;
        box-shadow: 1px 1px 8px 1px #858585;
        background-color: #4497FF;
    }
    @media ${device.mobileS} {
        font-size: 0.85em;
        width: 80%;
        margin-top: ${props => props.top ? "1rem":"0"};
        margin-left: ${props => props.home ? "0rem!important":"0!important"};
    }
    @media ${device.tablet} {
        font-size: 1em!important;
        width: auto!important;
        margin-top: 0!important;
    }
    @media ${device.laptopL} {
        font-size: 1em!important;
        width: auto!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
        width: auto!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
`

//Basic template for all regular buttons (for home, headers etc.)
export const BtnSecondary = styled.button `
    cursor: pointer;
    border-radius: 10px;
    border: 1.5px solid #4497FF;
    color: #4497FF;
    background-color: white;
    position: relative;
    text-align: center;
    font-weight: 700;
    padding: 0.75em 2em;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.3s;
    box-shadow: 0px 0px 8px 0px #999999;
    &:hover {
        text-decoration: none;
        background-color: white;
        box-shadow: 1px 1px 8px 1px #4497FF;
        border: 1.5px solid #88BDFF;
        color: #88BDFF;
    }
    &:focus {
        outline: none;
    }
    @media ${device.mobileS} {
        font-size: 0.85em;
        width: 80%;
        margin-top: ${props => props.top ? "1rem":"0"};
    }
    @media ${device.tablet} {
        font-size: 1em!important;
        width: auto!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.laptopL} {
        font-size: 1em!important;
        width: auto!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
        width: auto!important;
        margin-top: 0!important;
        margin-left: ${props => props.left ? "1rem!important":"0!important"};
    }
`

export const FAQBtn = styled.button `
    background-color: white;
    border: none;
    width: 100%;
    margin-bottom: 14px;
    &:focus {
        outline: none;
    }
`

//Small buttons, usually buttons inside cards
export const SmallBtn = styled(Btn) `
    cursor: ${props => props.state === "active" ? "":"not-allowed"};
    display: ${props => props.isAction ? "inline":"none"};
    box-shadow: ${props => props.state === "active" ? "":"none"};
    background-color: ${props => props.state === "active" ? "#4497FF":"#9D9D9D"};
    &:hover {
      background-color: ${props => props.state === "active" ? "#4497FF":"#9D9D9D"};
      box-shadow: ${props => props.state === "active" ? "":"none"};
    }
    @media ${device.mobileS} {
        font-size: 0.75em;
    }
    @media ${device.tablet} {
        font-size: 0.9em!important;
    }
    @media ${device.desktop} {
        font-size: 1.5em!important;
    }
`

//When the display of the button is conditional
export const BtnConditional = styled(Btn) `
  display: ${props => props.isAction === "true" ? "inline":"none"}
  margin: 30px 10px 10px 10px;
`

//Toggle button for the timeline
export const ToggleBtn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

    cursor: pointer;
    border: 1.5px solid #4496FF;
    color: #4496FF;
    text-align: center;
    margin-left: ${props => props.left ? "1rem":"0"};
    background-color: ${props => props.active ? "#4496FF":"white"};
    color: ${props => props.active ? "white":"#4496FF"};
    &:hover {
        text-decoration: none;
        border: 1.5px solid #8FC0FF;
        background-color: #8FC0FF;
        color: white;
    }
    @media ${device.mobileS} {
        font-size: 0.75em;
        padding: 0.5em 0.75em;
    }
    @media ${device.tablet} {
        font-size: 1em!important;
        padding: 0.7em 1.35em;
        margin-top: 0!important;
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
        padding: 0.7em 1.35em;
        margin-top: 0!important;
    }
`

export const StyledButtonBack = styled(ButtonBack) `
    background: none;
    border: none;
    position: absolute;
    left: 25px;
    top: 40vh;
    font-size: 3em;
    z-index: 100;
    color: rgba(0, 0, 0, 0.7);
    > i {
      border: 3px solid rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-color: #EFF8FF;
      &:hover {
        background-color: #EFF8FF;
        box-shadow: 0px 0px 5px 1px #a6a6a6;
      }
    }
    &:focus {
      outline: none;
    }
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: inline;
    }
`

export const StyledButtonNext = styled(ButtonNext) `
    background: none;
    border: none;
    position: absolute;
    right: 25px;
    top: 40vh;
    font-size: 3em;
    z-index: 100;
    color: rgba(0, 0, 0, 0.7);
    > i {
      background-color: #EFF8FF;
      border: 3px solid rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      &:hover {
        background-color: #EFF8FF;
        box-shadow: 0px 0px 5px 1px #a6a6a6;
      }
    }
    &:focus {
      outline: none;
    }
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: inline;
    }
`

export const StyledDotGroup = styled(DotGroup) `
    > button {
        background-color: #B7DFE6;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        width: 14px;
        height: 14px;
        margin: 8px;
        border-radius: 50%;
        border: none;
        box-shadow: 1px 1px 8px 1px #25497A;
        &:hover {
          box-shadow: 1px 1px 8px 1px #4497FF;
        }
    }

    > .carousel__dot--selected {
      background-color: gray;
      box-shadow: 1px 1px 9px 1px #25497A;
    }
    z-index: 100;
    position: absolute;
    top: 90vh;
    left: 50%;
    margin-left: -60px;
`
