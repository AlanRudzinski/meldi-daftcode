import React from 'react';

import { StyledDataWrapper, StyledDataTitle, StyledDataDescription } from './DataEntry.styles'

const DataEntry = ({ number, description}) => (
    <StyledDataWrapper>
        <StyledDataTitle>{number}</StyledDataTitle>
        <StyledDataDescription><div>{description}</div></StyledDataDescription>
    </StyledDataWrapper>
)

export default DataEntry;