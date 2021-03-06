import styled, { css } from 'styled-components';



const BasicLineStyling = css`
display: block;
width: 30px;
height: 3px;
background-color: #000;
border-radius: 4px;
position: absolute;
transition-property: transform;
transition-duration: 0.15s;
transition-timing-function: ease;
`;

export const Hamburger = styled.button`
position: absolute;
z-index: 1000;
right: 5px;
top: 45px;
display: inline-block;
cursor: pointer;
border: 0;
overflow: visible;
background-color: transparent;
transition-property: opacity, filter;
transition-duration: 0.15s;
transition-timing-function: linear;
@media (min-width: 1001px) {
  display: none;
}
`;

export const Box = styled.span`
width: 40px;
height: 24px;
display: inline-block;
position: relative;
`;

export const Line = styled.span`
top: 2px;
margin-top: -2px;
backgrond-color: #000;
${BasicLineStyling}

${props => (props.menuOpen ? 'transform: translate3d(0, 10px, 0) rotate(45deg);' : '')};
&:before, &:after {
${BasicLineStyling}
content: "";
}
&:after {
top: 15px;
${props => (props.menuOpen ? 'transform: translate3d(0, -15px, 0) rotate(-90deg)' : '')}; 
}
&:before {
top: 7.5px;
transition-property: transform, opacity;
transition-timing-function: ease;
${props => (props.menuOpen ? 'transform: rotate(-45deg) translate3d(-5.71429px, -7px, 0); opacity: 0' : '')};
}
`;