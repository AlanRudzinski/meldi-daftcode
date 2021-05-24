import React, { useState, useCallback, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { StyledNavigation, StyledLinkList, StyledLogoLink } from './HeaderNavigation.styles';
import Button from '../../../Common/Button/Button.component';
import CustomLink from '../../../Common/CustomLink/CustomLink.component';
import ContentWrapper from './../../ContentWrapper/ContentWrapper.component'
import HamburgerButton from '../HamburgerButton/HamburgerButton.component'

import Logo from '../../../../assets/logo.svg';

import NAVIGATION_DATA from '../../../../data/navigation.data'

const HeaderNavigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = useCallback(() => {
        setMenuOpen(prevState => !prevState);
      }, [setMenuOpen]);
    useEffect(() => {
        if (menuOpen) {
          document.getElementsByTagName('html')[0].style.overflow = 'hidden';
          disableBodyScroll(document.documentElement);
        } else {
          enableBodyScroll(document.documentElement);
          document.getElementsByTagName('html')[0].style = '';
        } return () => clearAllBodyScrollLocks();
      }, [menuOpen]);

    const { links, logInButton : { margin, text, ...other}} = NAVIGATION_DATA;

    return (
    <ContentWrapper>
        <header>
            <StyledNavigation>
                <StyledLogoLink href="/"><Logo /></StyledLogoLink>
                <HamburgerButton menuOpen={menuOpen} handleClick={handleClick}/>
                <StyledLinkList menuOpen={menuOpen}>
                    {
                        links.map((link, idx) => (
                            <CustomLink key={idx} link="/">{link}</CustomLink>
                        ))
                    }
                    <Button addMargin={margin} {...other}>{text}</Button>

                </StyledLinkList>

            </StyledNavigation>
        </header>
    </ContentWrapper>
 
)};

export default HeaderNavigation;