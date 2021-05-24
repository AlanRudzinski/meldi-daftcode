import React from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.component';
import HeroDescription from '../HeroDescription/HeroDescription.component';

import COMMUNITY_SECTION_DATA from '../../data/communitySection.data';

import videoImg from '../../images/video.png';
import play from '../../images/play.png';

import { 
    StyledSectionWrapper, 
    StyledTitleWrapper, StyledDescriptionWrapper, StyledVideoWrapper, StyledPlayButton } from './CommunitySection.styles';

const CommunitySection = () => {
    const { title, description } = COMMUNITY_SECTION_DATA
    return (
    <StyledSectionWrapper>
        <StyledTitleWrapper>
            <CustomTitle>{title}</CustomTitle>
        </StyledTitleWrapper>
        <StyledDescriptionWrapper>
            <HeroDescription>{description}</HeroDescription>
        </StyledDescriptionWrapper>
        <StyledVideoWrapper videoImg={videoImg}>
            <StyledPlayButton play={play}/>
        </StyledVideoWrapper>
    </StyledSectionWrapper>
)
}
export default CommunitySection;