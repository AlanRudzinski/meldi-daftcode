import React, { useState } from 'react';
import { StyledFocusDot, StyledLink } from './CustomLink.styles'

const Link = ({ children }) => {
    const [hovered, setHovered] = useState(null);
    return (
        <StyledLink onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} to={children.toLowerCase()}>
            {children}
            <StyledFocusDot hovered={hovered}/>
        </StyledLink>
 
)}

export default Link;