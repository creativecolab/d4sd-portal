import styled from 'styled-components';
import { device } from './breakpoints.js';
import img from '../img/about_header.svg';
import { CarouselProvider } from 'pure-react-carousel';

//The outer container defines the maximum width the page no matter what the screen size is
//The content inside the outer container can either be left-aligned or centered (when the center attribute appears)
export const OuterContainer = styled.div `
    text-align: ${props => props.center ? "center":"left"};
    margin: auto;
    height: ${props => props.full ? "100vh":""};
    @media ${device.mobileS} {
        max-width: 320px;
    }
    @media ${device.tablet} {
        max-width: 720px!important;
    }
    @media ${device.laptop} {
        max-width: 1200px!important;
    }
    @media ${device.laptopL} {
        max-width: 2400px!important;
    }
`

//The inner container defines the maximum width of the content when you want to
//leave more space around your contents
export const InnerContainer = styled.div `
    margin: auto;
    @media ${device.mobileS} {
        width: 320px;
    }
    @media ${device.tablet} {
        width: 80%!important;
    }
    @media ${device.laptop} {
        width: 65%!important;
    }
    @media ${device.laptopL} {
        width: 60%!important;
    }
`

//For the cards like the ones on Get Involved page
export const Card = styled.div `
    box-shadow: 0px 0px 4px 0px #999999;
    padding: ${props => props.theme.padding};
    width: ${props => props.theme.width};

    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    @media ${device.mobileS} {
        padding: ${props => props.theme.paddingS}!important;
        height: ${props => props.theme.heightS}!important;
    }
    @media ${device.tablet} {
        padding: ${props => props.theme.paddingM}!important;
        height: ${props => props.theme.heightM}!important;
    }
    @media ${device.laptopL} {
        padding: ${props => props.theme.paddingL}!important;
        height: ${props => props.theme.heightL}!important;
    }
`

//For displaying components in flexbox layout like the Goal section on about page
//and the cards on get involved page
//The content inside can be centered (when the center attribute is presented) or left-aligned
export const OuterFlexBox = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.center ? "center":"flex-start"};

`

//For diplaying inside the outer flex box
export const InnerFlexBox = styled.div `
    display: flex;
    align-items: ${props => props.center ? "center":"flex-start"};
    justify-content: ${props => props.start ? "flex-start":"space-between"};
    @media ${device.laptop} {
        width: ${props => props.half ? "50%!important":"100%"};
    }
    @media ${device.mobileS} {
        width: 100%;
        padding: ${props => props.half ? "14px":"0"}
    }
`

export const ToggleFlexBox = styled.div `
    display: flex;
    border-radius: 15px;
    align-items: ${props => props.center ? "center":"flex-start"};
    justify-content: ${props => props.middle ? "center":"space-between"};
    @media ${device.laptop} {
        width: ${props => props.half ? "50%!important":"100%"};
    }
    @media ${device.mobileS} {
        width: 100%;
        padding: ${props => props.half ? "14px":"0"}
    }
`

export const IframeContainer = styled.div `
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-width: 100%;
`

export const FlexibleWidth = styled.div `
    margin: ${props => props.left ? "":"auto"};
    @media ${device.mobileS} {
        width: ${props => props.theme.widthS};
    }
    @media ${device.tablet} {
        width: ${props => props.theme.widthM};
    }
`

export const StyledCarouselProvider = styled(CarouselProvider) `
    overflow: hidden;
    height: ${props => props.full ? "100vh":"400px"};
    @media ${device.mobileS} {
        height: ${props => props.full ? "100vh":"35vh"};
    }
    @media ${device.tablet} {
        height: ${props => props.full ? "100vh":"20vh"};
    }
    @media ${device.laptopL} {
        height: ${props => props.full ? "100vh":"50vh"};
    }
`

export const TempPadding = styled.div `
    @media ${device.mobileS} {
        background: transparent;
        padding: 0;
    }
    @media ${device.laptop} {
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0.7)!important;
        padding: 3em 3.5em!important;
    }
`

export const Grid = styled.div `
    display: grid;
    grid-template-columns: 4% 2% 90%;
    grid-template-rows: auto;
    grid-gap: 0;
    margin-left: auto;
    margin-right: auto;
`

export const Left = styled.div `
    @media ${device.mobileS} {
        margin-left: 50px;
    }
    @media ${device.tablet} {
        margin-left: 100px;
    }
    @media ${device.laptopL} {
        margin-left: 100px;
    }
`
