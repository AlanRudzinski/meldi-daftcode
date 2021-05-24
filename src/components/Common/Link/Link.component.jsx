import React from 'react';
import { StyledFocusDot, StyledLink } from './Link.styles'

const Link = ({ children, handleClicked }) => (
        <StyledLink onClick={() => handleClicked(children)}>
            {children}
            <StyledFocusDot/>
        </StyledLink>
 
)

export default Link;