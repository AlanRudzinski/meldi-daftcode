import React, { useState } from 'react';

import { StyledNavigarnion, StyledLinkList, StyledLogoLink } from './HeaderNavigation.styles';
import Button from '../../../Common/Button/Button.component';
import Link from '../../../Common/Link/Link.component';
import ContentWrapper from './../../ContentWrapper/ContentWrapper.component'

import Logo from '../../../../assets/logo.svg';

import NAVIGATION_DATA from '../../../../data/navigation.data'

const HeaderNavigation = () => {
    const [clickedLink, setClickedLink] = useState({
        previous: null,
        new: null,
    })
    const { links, logInButton : { margin, text, ...other}} = NAVIGATION_DATA;


    const handleClicked = (link) => setClickedLink({
        previous: clickedLink.new,
        new: link
    })
    console.log(links.indexOf(clickedLink.previous) > links.indexOf(clickedLink.new))
    return (
    <ContentWrapper>
        <header>
            <StyledNavigarnion>
                <StyledLogoLink href="/"><Logo /></StyledLogoLink>
                <StyledLinkList>
                    {
                        links.map((link, idx) => (
                            <Link handleClicked={handleClicked} key={idx} link="/">{link}</Link>
                        ))
                    }
                    <Button addMargin={margin} {...other}>{text}</Button>

                </StyledLinkList>

            </StyledNavigarnion>
        </header>
    </ContentWrapper>
 
)};

export default HeaderNavigation;