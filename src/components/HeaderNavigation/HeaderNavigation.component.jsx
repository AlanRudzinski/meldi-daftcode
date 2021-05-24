import React from 'react';

import { StyledNavigarnion, StyledLinkList, StyledLogoLink } from './HeaderNavigation.styles';
import CustomButton from '../CustomButton/CustomButton.component';
import CustomLink from '../CustomLink/CustomLink.component'

import Logo from '../../assets/logo.svg';

//map for styled link items

const HeaderNavigation = () => (
    <header>
        <StyledNavigarnion>
            <StyledLogoLink href="/"><Logo /></StyledLogoLink>
            <StyledLinkList>
                <CustomLink link="/">Home</CustomLink>
                <CustomLink link="/">About</CustomLink>
                <CustomLink link="/">Courses</CustomLink>
                <CustomLink link="/">News</CustomLink>
                <CustomLink link="/">Contact</CustomLink>
                <CustomButton addMargin={18} width={124} height={50}>Log in</CustomButton>

            </StyledLinkList>

        </StyledNavigarnion>
    </header>
);

export default HeaderNavigation;