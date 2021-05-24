import React from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.component';
import HeroDescription from '../HeroDescription/HeroDescription.component';
import OptionsCard from '../OptionsCard/OptionsCard.component';

import { OptionsSectionWrapper, StyledDescriptionWrapper } from './OptionsSection.styles'

const OptionsSection = () => (
    <OptionsSectionWrapper>
        <CustomTitle>What you’re getting?</CustomTitle>
        <StyledDescriptionWrapper>
           <HeroDescription>We bring you personalized development programs that are backed by research and crafted from the years of experience</HeroDescription>
        </StyledDescriptionWrapper>
        <OptionsCard/>
    </OptionsSectionWrapper>
)

export default OptionsSection;