import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position:relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content:center;
    height: 3.1em;
    padding: 0 1.8em;
    font-size: 1rem;
    user-select: none;
    border-radius: ${props => props.theme.GeneralRadius};
    background:${props => props.theme.PrimaryColor};
    color:#f7f7f7;
    box-shadow: ${props => props.theme.DropShadow};
    transition: ease .3s;
    cursor: pointer;
    opacity:.8;
    margin-top:1em;

    &:hover{
        opacity:1;
    }
`

const Text = styled.span`
    color: ${props => props.theme.SecondaryColor};
`

const Button = ({Title, ClickHandler}) => {

    return (
        <Container onClick={ClickHandler}>
            <Text>{Title}</Text>
        </Container>
    );
}

export default Button;