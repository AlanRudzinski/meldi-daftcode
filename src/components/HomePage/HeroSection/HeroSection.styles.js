import styled from 'styled-components';

import HeroImg from '../../../assets/heroImg.svg';


export const StyledHeroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 134px 0 0 8px;
    @media (max-width: 400px) {
        flex-direction: column-reverse;
        padding-top: 0
    }
`

export const StyledHeroImg = styled(HeroImg)`
    padding: 47px 10px 0 0;
    min-width: 677px;
    @media (max-width: 400px) {
        min-width: 200px;
        max-height: 230px;
        width: 300px;
        padding: 0 0 15px 10px;
    }
`