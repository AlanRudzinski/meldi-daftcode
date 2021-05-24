import styled from 'styled-components';
import { Link } from 'gatsby'; 


export const StyledFocusDot = styled.div`
    width: 8px;
    height: 8px;
    background-color: ${props => props.hovered ? `#FABD20` : `#FEF4E6`};
    border-radius: 50%;
    transition: 0.3s ease-in;
    transform: translateY(${props => props.hovered ? `0px` : `20px`})
`

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #131E07;
    text-decoration: none;
    margin: 0 20px;
    font-size: 24px;
    cursor: pointer;


`