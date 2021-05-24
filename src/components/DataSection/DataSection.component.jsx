import React from 'react';
import DataEntry from '../DataEntry/DataEntry.component';
import { StyledSection } from './DataSection.styles';

const DataSection = () => (
    <StyledSection>
        <DataEntry num={"230+"} desc={"Scientifically based tests"} />
        <DataEntry num={"10,000+"} desc={"Medical recommendations"} />
        <DataEntry num={"25M+"} desc={"Students learning"} />
    </StyledSection>
)

export default DataSection;