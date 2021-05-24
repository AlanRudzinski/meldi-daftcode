import React from 'react';

import { StyledDataWrapper, StyledDataTitle, StyledDataDescription } from './DataEntry.styles'

const DataEntry = ({ num, desc}) => (
    <StyledDataWrapper>
        <StyledDataTitle>{num}</StyledDataTitle>
        <StyledDataDescription>{desc}</StyledDataDescription>
    </StyledDataWrapper>
)

export default DataEntry;