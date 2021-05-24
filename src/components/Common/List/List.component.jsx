import React from 'react'; 

import { StyledList } from './List.styles'

const List = ({ items }) => (

    <StyledList>
        {items.map((item, idx) => (
            idx === 0 ? <li key={idx}>{item}</li> : <li key={idx}><a href="/">{item}</a></li>
        ))}
    </StyledList>
)

export default List