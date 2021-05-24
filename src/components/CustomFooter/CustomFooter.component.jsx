import React from 'react';

import Logo from '../../assets/logo_white.svg';
import ContentWrapper from '../../containers/ContentWrapper/ContentWrapper.component'
import CustomList from '../CustomList/CustomList.component';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions.component';
import EmailSubmit from '../EmailSubmit/EmailSubmit.component';

import { StyledFooter, StyledListsWrapper, StyledFooterDataWrapper } from './CustomFooter.styles';

import FOOTER_DATA from '../../data/footer.data'

const CustomFooter = () => {
    return (
    <StyledFooter>
        <ContentWrapper>
            <Logo />
            <StyledFooterDataWrapper>
                <StyledListsWrapper>
                    {
                        FOOTER_DATA.lists.map(element => (
                            <CustomList key={element.id} items={element.list}/>
                        ))
                    }
                </StyledListsWrapper>
                <EmailSubmit/>
            </StyledFooterDataWrapper>
            <TermsAndConditions />
        </ContentWrapper>
    </StyledFooter>
)}

export default CustomFooter;