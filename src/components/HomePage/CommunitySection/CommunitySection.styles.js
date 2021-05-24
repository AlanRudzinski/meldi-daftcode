import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
    padding-top: 65px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: rgb(250, 189, 32);
    background: linear-gradient(180deg, rgba(250, 189, 32, 1) 0%, rgba(250, 189, 32, 1) 79%, rgba(229,229,229, 1) 79%, rgba(229,229,229,1) 100%);
    @media (max-width: 400px) {
        background: linear-gradient(180deg, rgba(250, 189, 32, 1) 0%, rgba(250, 189, 32, 1) 87%, rgba(229,229,229, 1) 87%, rgba(229,229,229,1) 100%);

    }

    `

export const StyledTitleWrapper = styled.div`
    width: 810px;
    text-align: center;
    @media (max-width: 400px) {
        width: 370px;
        padding: 0 0 0 70px;
        text-align: left;
    }
    
`

export const StyledDescriptionWrapper = styled.div`
    width: 360px;
    text-align: center;
    padding: 25px 0 16px;
    @media (max-width: 400px) {
        padding: 20px 0 46px 0px;
        text-align: left;
        width: 300px;
    }
`

export const StyledVideoWrapper = styled.div`
    width: 1240px;
    height: 603px;
    border-radius: 8px;
    background-image: url(${props => props.videoImg});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width: 400px) {
        width: 327px;
        height: 160px;
    }
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
background-size: cover;
@media (max-width: 400px) {
    width: 78px;
    height: 78px;
}

`