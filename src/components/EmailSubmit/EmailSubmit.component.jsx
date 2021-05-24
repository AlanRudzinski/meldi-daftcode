import React from 'react'

import CustomButton from '../CustomButton/CustomButton.component'
import FooterTitle from '../FooterTitle/FooterTitle.component';
import { StyledInput, StyledForm, StyledLabel, StyledEmailSubmitWrapper } from './EmailSubmit.styles';

import FOOTER_DATA from '../../data/footer.data'

const EmailSubmit = () => (
    <StyledEmailSubmitWrapper>
        <FooterTitle>{FOOTER_DATA.title}</FooterTitle>
        <StyledForm action="." method="post">
            <StyledLabel>email</StyledLabel>
            <StyledInput placeholder="Enter your email" type="email" name="email" id="email"/>
            <CustomButton type="submit" width={113} height={34} font={18} radius={4}>Get started</CustomButton>        
        </StyledForm>
    </StyledEmailSubmitWrapper>
)

export default EmailSubmit;