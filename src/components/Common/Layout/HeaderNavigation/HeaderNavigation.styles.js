import styled from 'styled-components';

export const StyledNavigarnion = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 10px 25px 0 6px;
    
`

export const StyledLinkList = styled.ul`
    display: flex;
    list-style: none;
    margin-right: 14px;
    @media (max-width: 400px) {
        display: none;
    }
`

export const StyledLogoLink = styled.a`
    padding-top: 15px;
`