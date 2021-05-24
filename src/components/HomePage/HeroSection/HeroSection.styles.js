import styled from 'styled-components';

import HeroImg from '../../../assets/heroImg.svg';


export const StyledHeroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 134px 0 0 8px;
    @media (max-width: 910px) {
        flex-direction: column-reverse;
        padding-top: 70px;

    }
    @media (max-width: 400px) {
        padding-top: 0
    }
`

export const StyledHeroImg = styled(HeroImg)`
    padding: 47px 10px 0 0;
    min-width: 677px;

    @media (max-width: 1250px) {
        min-width: 380px;
        padding: 0 0 15px 10px;
    }
    @media (max-width: 780px) {
        min-width: 200px;
        max-height:230px
    }
    @media (max-width: 600px) {
        width: 400px;
    }
    @media (max-width: 500px) {
        width: 300px;
        padding: 0 0 15px 10px;
    }
`