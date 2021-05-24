import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
    margin-top: 210px;
    height: 811px;
    background-color: #FABD20;

    width: 100vw;
    position: relative;
    transform: translateX(-12vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const StyledTitleWrapper = styled.div`
    width: 810px;
    text-align: center;
    margin-top: 63px;
    margin-left: 10px;
`

export const StyledDescriptionWrapper = styled.div`
    width: 360px;
    text-align: center;
    margin-top: 23px;
    margin-left: 12px;
`

export const StyledVideoWrapper = styled.div`
    width: 1240px;
    height: 603px;
    border-radius: 8px;


    position: absolute;
    bottom: -210px;
    left: 107px;
    background-image: url(${props => props.videoImg});
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const StyledPlayButton = styled.button`

border: none;
margin: 0;
padding: 0;
width: 130px;
height: 130px;
background-color: transparent;
cursor: pointer;
background-image: url(${props => props.play});

`