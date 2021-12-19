import React, { useState, Fragment, useEffect } from 'react'
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/Components/Auth/AuthActions';

import LoginForm from '../Organisms/LoginForm';
import Alert from '../Molecules/Alert';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background:${props => props.theme.PrimaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Login = ({loginUser, AuthReducer}) => {

    const [datos, setDatos] = useState({
        email: "",
        errorEmail:false,
        password: "",
        errorLogin:false
    })

    const [activeAlert, setActiveAlert] = useState({
        Status: false,
        Error: false,
        Msg: ''
    });

    const {email, password} = datos;

    const handlerInputs = (e) => {
        

        setDatos({
            ...datos,
            errorEmail:false,
            errorLogin:false,
            [e.target.name] : e.target.value
        })
    }

    const handlerAlert = (Error, Message) => {
        setActiveAlert({
            Status: true,
            Error:Error,
            Msg:Message
        })
    }

    const closeAlert = () => {
        setActiveAlert({
            Status: false
        })
    }

    const emailValidator = text => {
        if (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,63}$/i.test(text)){
            return true;
        } 
        else{
            return false;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        //loginUser(email, password);

        if(email.trim() === '' || password.trim() === ''){
            
            handlerAlert(true, "Todos los campos son requeridos");
            setDatos({
                ...datos,
                errorLogin:true
            })
            return;
        }
        else if(emailValidator(email)===false){

            handlerAlert(true, "El correo electrónico ingresado no es válido");
            setDatos({
                ...datos,
                errorEmail:true
            })
            return;
        }else{
            loginUser(email, password);
        }
    }

    useEffect(() => {
        if(AuthReducer.Error){
            AuthReducer.Error && handlerAlert(true, "Error al iniciar sesión",);
        }
    },[AuthReducer.Error])

    if(AuthReducer.isAuthenticated){
        return <Navigate to="/home"/>
    }


    return (

        <Fragment>
            {activeAlert.Status && 
                <Alert
                    Error={activeAlert.Error}
                    Msg={activeAlert.Msg}
                    CloseHandler={closeAlert}
                />
            }
            <Container>
                <LoginForm
                    Datos={datos}
                    HandlerInputs={handlerInputs}
                    SubmitLogin={handleSubmit}
                />
            </Container>
        </Fragment>
    );
}

const StateProps = state => ({
    AuthReducer: state.AuthReducer
})

export default connect(StateProps, {loginUser})(Login);

