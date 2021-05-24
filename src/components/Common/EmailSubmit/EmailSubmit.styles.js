import styled from 'styled-components';

export const StyledInput = styled.input`
    background: transparent;
    outline: none;
    border: none;
    color: #7C8176;
    font-size: 18px;
    width: 60%;
    padding-left: 15px;
    letter-spacing: -1px;
`

export const StyledForm = styled.form`
    border: #7C8176 1px solid;
    border-radius: 8px;
    height: 50px;
    width: 350px;
    display: flex;
    align-items: center;
    @media(max-width: 400px){
        width: 100%;
        margin-bottom: 22px;
    }
`

export const StyledLabel = styled.label`
    display: none;
`

export const StyledEmailSubmitWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 44px 7px 0 0;
    @media(max-width: 400px){
        align-items: center;

        & h2:first-child{
            align-self: flex-start;
        }
    }
    
`