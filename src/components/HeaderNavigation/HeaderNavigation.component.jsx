import React from 'react';

import { StyledNavigarnion, StyledLinkList, StyledLogoLink } from './HeaderNavigation.styles';
import CustomButton from '../CustomButton/CustomButton.component';
import CustomLink from '../CustomLink/CustomLink.component';
import ContentWrapper from '../../containers/ContentWrapper/ContentWrapper.component'

import Logo from '../../assets/logo.svg';

import NAVIGATION_DATA from '../../data/navigation.data'

const HeaderNavigation = () => {
    const { links, logInButton : { margin, text, ...other}} = NAVIGATION_DATA;
    return (
    <ContentWrapper>
        <header>
            <StyledNavigarnion>
                <StyledLogoLink href="/"><Logo /></StyledLogoLink>
                <StyledLinkList>
                    {
                        links.map((link, idx) => (
                            <CustomLink key={idx} link="/">{link}</CustomLink>
                        ))
                    }
                    <CustomButton addMargin={margin} {...other}>{text}</CustomButton>

                </StyledLinkList>

            </StyledNavigarnion>
        </header>
    </ContentWrapper>
 
)};

export default HeaderNavigation;