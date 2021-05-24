import React from 'react';

import { StyledContentWrapper } from './ContentWrapper.styles';

const ContentWrapper = ({ children }) => (
    <StyledContentWrapper>
        {children}
    </StyledContentWrapper>
)

export default ContentWrapper;