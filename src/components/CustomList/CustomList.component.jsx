import React from 'react'; 

import { StyledList } from './CustomList.styles'

const CustomList = ({ items }) => (

    <StyledList>
        {items.map((item, idx) => (
            idx === 0 ? <li>{item}</li> : <li><a href="/">{item}</a></li>
        ))}
    </StyledList>
)

export default CustomList