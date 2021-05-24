import React from 'react';
import CustomTitle from '../CustomTitle/CustomTitle.component';
import HeroDescription from '../HeroDescription/HeroDescription.component';
import OptionsCard from '../OptionsCard/OptionsCard.component';
import ContentWrapper from '../../containers/ContentWrapper/ContentWrapper.component'

import { OptionsSectionWrapper, StyledDescriptionWrapper, StyledCardsWrapper } from './OptionsSection.styles'

import OPTIONS_SECTION_DATA from '../../data/optionsSection.data';

const OptionsSection = () => {
    const { title, description, cards } = OPTIONS_SECTION_DATA;
    return (
    <OptionsSectionWrapper>
        <ContentWrapper>
            <CustomTitle>{title}</CustomTitle>
            <StyledDescriptionWrapper>
                <HeroDescription>{description}</HeroDescription>
            </StyledDescriptionWrapper>
        </ContentWrapper>
        <StyledCardsWrapper>
            {
                cards.map(card => {
                    const { pic, ...other} = card;
                    return <OptionsCard Pic={pic} {...other} />
                })
            }
            {/* <OptionsCard Pic={CardOneImg} title={} description={`Start with a free text based chat session online`}/> */}
            {/* <OptionsCard Pic={CardTwoImg} title={"Personal Coach"} description={"A dedicated coach to help you through your journey"}/> */}
            {/* <OptionsCard Pic={CardThreeImg} title={"Text chat session"} description={} /> */}
        </StyledCardsWrapper>
        

    </OptionsSectionWrapper>
)}

export default OptionsSection;