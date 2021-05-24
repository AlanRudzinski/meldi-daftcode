import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    width: 190px;
    li a {
        font-size: 18px;
        color: #E5E5E5;
        margin-bottom: -1px;
        text-decoration: none;
    }
    & li:first-child  {
        color: #7C8176;
        margin-bottom: 18px;

    }
`