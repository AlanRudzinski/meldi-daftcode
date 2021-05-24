import React from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.component';
import HeroDescription from '../HeroDescription/HeroDescription.component';
import videoImg from '../../images/video.png';
import play from '../../images/play.png';

import { 
    StyledSectionWrapper, 
    StyledTitleWrapper, StyledDescriptionWrapper, StyledVideoWrapper, StyledPlayButton } from './CommunitySection.styles';

const CommunitySection = () => (
    <StyledSectionWrapper>
        <StyledTitleWrapper>
            <CustomTitle>What our community is saying?</CustomTitle>
        </StyledTitleWrapper>
        <StyledDescriptionWrapper>
            <HeroDescription>A mission-driven company that invest in and builds healthier living</HeroDescription>
        </StyledDescriptionWrapper>
        <StyledVideoWrapper videoImg={videoImg}>
            <StyledPlayButton play={play}/>
        </StyledVideoWrapper>
    </StyledSectionWrapper>
)

export default CommunitySection;