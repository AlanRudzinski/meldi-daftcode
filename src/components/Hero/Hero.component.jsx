import React from 'react';

import { StyledHeroWrapper, StyledHeroImg } from './Hero.styles'
import CustomTitle from '../CustomTitle/CustomTitle.component';
import HeroDescription from '../HeroDescription/HeroDescription.component';
import CustomButton from '../CustomButton/CustomButton.component';


const Hero = () => (
    <StyledHeroWrapper>
        <div>
            <CustomTitle>Check your well-being</CustomTitle>
            <HeroDescription>We’re sure that deciding to check on your health is a big step, even if it doesn’t bother
        in any way.</HeroDescription>
            <CustomButton width={255} height={70}> Get started</CustomButton>
        </div>
        <StyledHeroImg/>
    </StyledHeroWrapper>
);

export default Hero;