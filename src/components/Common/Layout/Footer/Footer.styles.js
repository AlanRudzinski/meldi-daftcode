import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: #131E07;
    padding: 89px 0 0 7px; 
    @media (max-width: 1000px) {
        padding: 65px 5px 0 ;
    }

`

export const StyledListsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 27px 0 0 0;
    @media(max-width: 1000px) {
        flex-direction: column;
    }
`

export const StyledFooterDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media(max-width: 600px) {
        flex-direction: column-reverse;
    }

    `