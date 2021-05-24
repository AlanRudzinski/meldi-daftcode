import React from 'react';
import Title from '../../Common/Title/Title.component';
import HeroDescription from '../HeroSection/HeroDescription/HeroDescription.component';
import OptionsCard from './OptionsCard/OptionsCard.component';
import ContentWrapper from '../../Common/ContentWrapper/ContentWrapper.component'

import { OptionsSectionWrapper, StyledDescriptionWrapper, StyledCardsWrapper } from './OptionsSection.styles'

import OPTIONS_SECTION_DATA from '../../../data/optionsSection.data';

const OptionsSection = () => {
    const { title, description, cards } = OPTIONS_SECTION_DATA;
    return (
    <OptionsSectionWrapper>
        <ContentWrapper>
            <Title>{title}</Title>
            <StyledDescriptionWrapper>
                <HeroDescription>{description}</HeroDescription>
            </StyledDescriptionWrapper>
        </ContentWrapper>
        <StyledCardsWrapper>
            {
                cards.map(card => {
                    const { pic, id, ...other} = card;
                    return <OptionsCard Pic={pic} key={id} {...other} />
                })
            }
        </StyledCardsWrapper>
    </OptionsSectionWrapper>
)}

export default OptionsSection;