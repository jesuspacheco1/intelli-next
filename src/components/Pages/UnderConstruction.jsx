import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:${props => props.theme.SecondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 40vw;
`

const Title = styled.h1`
    color:${props => props.theme.PrimaryColor};
    font-size: 2.5rem;
    margin-top: 0.5em;
`

const UnderConstruction = () => {
    return (
        <Container>
            <Image src="/Assets/Images/under_construction.png" alt=""/>
            <Title>Under Construction</Title>
        </Container>
    );
}

export default UnderConstruction;