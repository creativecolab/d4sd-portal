import styled from 'styled-components';
import { device } from './breakpoints.js';

// Set the image width or height
// Syntax: <FlexibleImg theme={{width: "10px", height: "10px"}}
export const FlexibleImg = styled.img`
    width: ${(props) => props.theme.width};
    height: ${(props) => props.theme.height};
    border-radius: ${(props) => (props.round ? '50%' : '0')}
    @media ${device.mobileS} {
        height: ${(props) => props.theme.heightS};
    }
    @media ${device.tablet} {
        height: ${(props) => props.theme.heightT};
    }
    @media ${device.laptopL} {
        height: ${(props) => props.theme.heightL};
    }
    @media ${device.desktop} {
        height: ${(props) => props.theme.height};
    }
`;
