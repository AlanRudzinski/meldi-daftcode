import React from 'react';

import { StyledDescription } from './HeroDescription.styles'

const HeroDescription = ({ children }) => (
    <StyledDescription>
        {children}
    </StyledDescription>
)

export default HeroDescription;