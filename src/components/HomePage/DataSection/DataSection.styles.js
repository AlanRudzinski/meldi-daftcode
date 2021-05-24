import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 210px 0 220px;

    @media (max-width: 800px) {
        flex-direction: column;
        padding: 0 0 65px 0;   
        margin-top: -30px;  
        align-items: center;
    }
`