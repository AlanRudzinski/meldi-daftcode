import React from 'react';
import { StyledFocusDot, StyledLink } from './CustomLink.styles'

const CustomLink = ({ children, link }) => (
        <StyledLink href={link}>
            {children}
            <StyledFocusDot/>
        </StyledLink>
 
)

export default CustomLink;