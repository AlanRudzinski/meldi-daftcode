import React from 'react'

import CardTitle from '../CardTitle/CardTitle.component';
import CardDescription from '../CardDescription/CardDescription.components';
import { StyledCardWrapper, StyledCardTextWrapper } from './OptionsCard.styles'

const OptionsCard = ({ Pic, title, description }) => (
    <StyledCardWrapper>
        <Pic />
        <StyledCardTextWrapper>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </StyledCardTextWrapper>
    </StyledCardWrapper>

)

export default OptionsCard