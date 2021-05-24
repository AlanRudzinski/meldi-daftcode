import React from 'react';

import { StyledHeroWrapper, StyledHeroImg } from './HeroSection.styles'
import CustomTitle from '../CustomTitle/CustomTitle.component';
import HeroDescription from '../HeroDescription/HeroDescription.component';
import CustomButton from '../CustomButton/CustomButton.component';
import ContentWrapper from '../../containers/ContentWrapper/ContentWrapper.component'

import HERO_SECTION_DATA from '../../data/heroSection.data'

const HeroSection = () => {
    const { title, description, customButton: width, height, text } = HERO_SECTION_DATA;
    return (
    <ContentWrapper>
        <StyledHeroWrapper>
            <div>
                <CustomTitle>{title}</CustomTitle>
                <HeroDescription>{description}</HeroDescription>
                <CustomButton width={width} height={height}>{text}</CustomButton>
            </div>
            <StyledHeroImg/>
        </StyledHeroWrapper>
    </ContentWrapper>

);}

export default HeroSection;