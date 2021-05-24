import styled from 'styled-components'

export const StyledButton = styled.button`
border: none;
margin: 0;
padding: 0;
width: ${props => props.width}px;
height: ${props => props.height}px;
cursor: pointer;

background-color: #FABD20;
color: #131E07;
border-radius: ${props => props.radius}px;

font-size: ${props => props.font}px;
font-family: 'Reem Kufi';

${props => props.addMargin ? `margin-left:${props.addMargin}px;` : ''}

-webkit-font-smoothing: inherit;
-moz-osx-font-smoothing: inherit;

-webkit-appearance: none;


&::-moz-focus-inner {
border: 0;
padding: 0;
}
@media (max-width: 400px) {
    width: 100%;
    font-size: 20px;
}

`