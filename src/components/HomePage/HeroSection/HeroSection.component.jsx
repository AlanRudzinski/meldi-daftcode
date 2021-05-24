import React from 'react';

import { StyledHeroWrapper, StyledHeroImg } from './HeroSection.styles'
import Title from '../../Common/Title/Title.component';
import HeroDescription from './HeroDescription/HeroDescription.component';
import Button from '../../Common/Button/Button.component';
import ContentWrapper from '../../Common/ContentWrapper/ContentWrapper.component'

import replaceO from '../../../utils/replaceO';

import HERO_SECTION_DATA from '../../../data/heroSection.data'

const HeroSection = () => {
    const { title, description, button: {width, height, text} } = HERO_SECTION_DATA;
    return (
    <ContentWrapper>
        <StyledHeroWrapper>
            <div>
                
                <Title>{replaceO(title)}</Title>
                <HeroDescription>{description}</HeroDescription>
                <Button width={width} height={height}>{text}</Button>
            </div>
            <StyledHeroImg/>
        </StyledHeroWrapper>
    </ContentWrapper>

);}

export default HeroSection;