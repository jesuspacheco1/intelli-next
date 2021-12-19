import React from 'react'
import styled from 'styled-components';
import InputField from '../Molecules/InputField';
import Button from '../Atoms/Button';

const Container = styled.div`
    width: 22em;
    height: 28em;
    background:${props => props.theme.SecondaryColor};
    border-radius:${props => props.theme.GeneralRadius};
    box-shadow:${props => props.theme.DropShadow};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`

const Title = styled.h3`
    font-size: 1.7em;
    color:${props => props.theme.PrimaryColor};
    user-select:none;
    margin-bottom:1em;
`

const Form = styled.form`
    width: 100%;
    padding: 0 3em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const LoginForm = ({Datos, HandlerInputs, SubmitLogin}) => {
    
    const {email, password, errorEmail, errorLogin} = Datos;

    return (
        <Container>
            <Title>Inciar Sesión</Title>

            <Form>
                <InputField
                    Name="email"
                    Type="text"
                    Value={email}
                    Error={errorEmail || errorLogin}
                    Handler={HandlerInputs}
                    Title="Correo electrónico"
                />
                <InputField
                    Name="password"
                    Type="password"
                    Value={password}
                    Error={errorLogin}
                    Handler={HandlerInputs}
                    Title="Contraseña"
                />
                <Button
                    Title="Inciar Sesión"
                    ClickHandler={SubmitLogin}
                />
            </Form>
        </Container>
    );
}

export default LoginForm;