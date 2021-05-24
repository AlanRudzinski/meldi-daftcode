import styled from 'styled-components';

export const OptionsSectionWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 154px 0 115px 0;
    @media(max-width: 400px) {
        padding: 65px 0 23px 0
    }
`;

export const StyledDescriptionWrapper = styled.div`
    width: 600px;
    max-width: 97%;
    @media(max-width: 400px) {
        width: 340px;
        padding: 20px 0 0 0;

    }
`;

export const StyledCardsWrapper = styled.div`
    display: flex;
    padding: 30px 0 0 0;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    @media(max-width: 900px) {
        flex-direction: column;
        align-items: center;

    }
`