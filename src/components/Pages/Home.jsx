import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import HomeSidebar from '../Organisms/HomeSidebar';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:${props => props.theme.PrimaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Message = styled.h1`
    color: ${props => props.theme.SecondaryColor};
    user-select: none;
    font-size: 3em;
`

const Home = ({AuthReducer}) => {

    return (
        <Container>
            <HomeSidebar/>
            <Message>BIENVENIDO {AuthReducer.User.first_name}!</Message>
        </Container>
    );
}

const StateProps = state => ({
    AuthReducer: state.AuthReducer
})

export default connect(StateProps)(Home);