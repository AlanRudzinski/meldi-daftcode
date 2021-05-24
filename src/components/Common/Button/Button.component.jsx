import React from 'react';

import { StyledButton } from './Button.styles';

const Button = ({ children, addMargin, width, height, font=25, radius=8 }) => (
    <StyledButton addMargin={addMargin} width={width} height={height} font={font} radius={radius}>
        {children}
    </StyledButton>

)

export default Button;