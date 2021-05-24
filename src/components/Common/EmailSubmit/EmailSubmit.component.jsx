import React from 'react'

import Button from '../../Common/Button/Button.component';
import FooterTitle from '../../Common/Layout/Footer/FooterTitle/FooterTitle.component';
import { StyledInput, StyledForm, StyledLabel, StyledEmailSubmitWrapper } from './EmailSubmit.styles';

import FOOTER_DATA from '../../../data/footer.data';

const EmailSubmit = () => (
    <StyledEmailSubmitWrapper>
        <FooterTitle>{FOOTER_DATA.title}</FooterTitle>
        <StyledForm action="." method="post">
            <StyledLabel>email</StyledLabel>
            <StyledInput placeholder="Enter your email" type="email" name="email" id="email"/>
            {window.innerWidth > 500 ? <Button type="submit" width={113} height={34} font={18} radius={4}>Get started</Button> : ''}        
        </StyledForm>
        {window.innerWidth > 500 ? '' : <Button type="submit" height={61}>Get started</Button>}        
    </StyledEmailSubmitWrapper>
)

export default EmailSubmit;