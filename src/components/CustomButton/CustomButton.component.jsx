import React from 'react';

import { StyledButton } from './CustomButton.styles';

const CustomButton = ({ children, addMargin, width, height }) => (
    <StyledButton addMargin={addMargin} width={width} height={height} >
        {children}
    </StyledButton>

)

export default CustomButton;