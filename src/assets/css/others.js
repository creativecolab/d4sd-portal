import styled from 'styled-components';
import { device } from './breakpoints.js';


// Set the background
// It can be blue (when blue attribute is presented) or white like the one on about page
// Or it can be the image if the image attribute is presented in element
export const Bg = styled.div`
    background-color: ${(props) => props.theme.color};
    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-width: 100%;
    @media ${device.mobileS} {
        background-size: contain;
    }
    @media ${device.tablet} {
        background-size: cover;
    }
`;


export const Br = styled.div`
    @media ${device.mobileS} {
        height: 20px;
    }
    @media ${device.tablet} {
        height: 24px!important;
    }
    @media ${device.laptop} {
        height: 26px!important;
    }
    @media ${device.laptopL} {
        height: 40px!important;
    }
`;

export const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 75%;
    background-color: #EFF8FF;
`;

export const Vl = styled.div`
    border-right: 20px solid #E4F2FF;
    height: 100%;
`;

export const Hl = styled.div`
    border-bottom: 4px solid #4497FF;
    position: relative;
    top: 32.4px;
    @media ${device.mobileS} {
      width: 50px;
      &:before {
        content: "";
        position: absolute;
        left: -10px;
        top: -10px;
        height: 25px;
        width: 25px;
        background: white;
        border: 4px solid #4497FF;
        border-radius: 50%;
      }
    }
    @media ${device.tablet} {
      width: 100px;
      &:before {
        content: "";
        position: absolute;
        left: -25px;
        top: -15px;
        height: 30px;
        width: 30px;
        background: white;
        border: 5px solid #4497FF;
        border-radius: 50%;
      }
    }

`;
