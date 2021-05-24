import React from 'react';
import DataEntry from '../DataEntry/DataEntry.component';
import { StyledSection } from './DataSection.styles';

import ENTRY_DATA from '../../data/dataSection.data'

const DataSection = () => (
    <StyledSection>
        {
            ENTRY_DATA.map(data => {
                const { id, ...other } = data;
                return <DataEntry key={id} {...other} />
            })
        }
    </StyledSection>
)

export default DataSection;