import styled from 'styled-components';

export const StyledDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    justify-content: center;
    align-items: center;
    @media (max-width: 400px) {
        padding-top: 85px;
    }
`

export const StyledDataTitle = styled.h2 `
    color: #FABD20;
    font-family: Rozha One;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    // line-height: 94px;
    // letter-spacing: 0em;
    text-align: left;
    margin: 0;
    margin-bottom: 7px;


`

export const StyledDataDescription = styled.span`
    font-family: Reem Kufi;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    width: 170px;
    @media (max-width: 400px) {
        font-size: 20px;
        line-height: 30px;
        width: 100%
    }
`