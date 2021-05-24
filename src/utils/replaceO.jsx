import React from 'react'
import Elipse from '../assets/elipse.svg'

const replaceO = (string) => {
    const indexOfO = string.indexOf("o");
    const firstPart = string.slice(0, indexOfO) 
    const secondPart = string.slice(indexOfO + 1)
    return (
        <React.Fragment>
            <span>{firstPart}</span>
            <Elipse />
            <span>{secondPart}</span>
        </React.Fragment>
        
)}

export default replaceO;