import styled from 'styled-components';

export const StyledNavigation = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding: 10px 25px 0 0;
    @media(max-width: 1150px) {
        justify-content: space-around;
    }
    @media(max-width: 900px) {
        justify-content: space-between;
    }
    
`

export const StyledLinkList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-right: 14px;
    height: unset;
    width: unset;
    position: unset;


    @media (max-width: 900px) {
        display: ${props=> props.menuOpen ? 'flex' : 'none'};
        flex-direction: column;
        align-items: center;
        background-color: #FEF4E6;
        top: 0;
        left: 0;
        position: fixed;
        height: 100%;
        width: 100%;
        margin-left: 0;
        padding: 0;
        overflow: clip;
        justify-content: space-evenly;
      }
    }
`

export const StyledLogoLink = styled.a`
    padding-top: 15px;
`