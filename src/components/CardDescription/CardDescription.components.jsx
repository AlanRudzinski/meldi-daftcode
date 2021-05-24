import React from 'react' ; 
import { StyledDescription } from './CardDescription.styles';

const CardDescription = ({ children }) => (
    <StyledDescription>{ children }</StyledDescription>
)
export default CardDescription;