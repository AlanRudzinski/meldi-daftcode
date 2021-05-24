import styled from 'styled-components';

import HeroImg from '../../assets/heroImg.svg';


export const StyledHeroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 134px 0 0 8px;
`

export const StyledHeroImg = styled(HeroImg)`
    padding: 47px 10px 0 0;
    min-width: 677px;
`