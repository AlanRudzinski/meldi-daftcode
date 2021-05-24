import React from 'react';

import { StyledButton } from './CustomButton.styles';

const CustomButton = ({ children, addMargin, width, height, font=25, radius=8 }) => (
    <StyledButton addMargin={addMargin} width={width} height={height} font={font} radius={radius}>
        {children}
    </StyledButton>

)

export default CustomButton;