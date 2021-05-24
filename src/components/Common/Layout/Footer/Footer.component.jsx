import React from 'react';

import Logo from '../../../../assets/logo_white.svg';
import ContentWrapper from '../../ContentWrapper/ContentWrapper.component'
import List from '../../List/List.component';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions.component';
import EmailSubmit from '../../EmailSubmit/EmailSubmit.component';

import { StyledFooter, StyledListsWrapper, StyledFooterDataWrapper } from './Footer.styles';

import FOOTER_DATA from '../../../../data/footer.data'

const Footer = () => {
    return (
    <StyledFooter>
        <ContentWrapper>
            <Logo />
            <StyledFooterDataWrapper>
                <StyledListsWrapper>
                    {
                        FOOTER_DATA.lists.map(element => (
                            <List key={element.id} items={element.list}/>
                        ))
                    }
                </StyledListsWrapper>
                <EmailSubmit/>
            </StyledFooterDataWrapper>
            <TermsAndConditions />
        </ContentWrapper>
    </StyledFooter>
)}

export default Footer;