import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 43px 0;
    box-sizing: border-box;
    margin: 0 15px;
    width: 350px;
    height: 439px;
    border-radius: 8px;
    @media(max-width: 900px) {
        width: 327px;
        margin-right: 0;
        margin-bottom: 40px;
    }
    `

export const StyledCardTextWrapper = styled.div`
    width: 230px;
    text-align: center;
`